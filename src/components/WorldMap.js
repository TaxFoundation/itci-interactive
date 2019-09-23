import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { geoPath, geoEqualEarth } from 'd3-geo';
import { geoRobinson } from 'd3-geo-projection';
import { scaleLinear } from 'd3-scale';
import {
  interpolateGnBu,
  interpolateBuGn,
  interpolateYlGn,
  interpolateYlOrBr,
  interpolateYlOrRd,
  interpolateRdPu,
} from 'd3-scale-chromatic';
import { feature } from 'topojson-client';

import world from '../data/world.json';
import ranks from '../data/ranks.json'
import useIndexRankings from '../data/useIndexRankings';

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template: auto / repeat(3, 1fr);
  grid-template-areas:
    'map map data'
    'map map region';
  margin: 1rem 0;
`;

const StyledBox = styled.div`
  border: 1px solid ${props => props.theme.borderColor};

  h2 {
    background-color: ${props => props.theme.orange};
    border: 1px solid ${props => props.theme.orange};
    color: ${props => props.theme.white};
    margin: -1px;
    padding: 0.5rem;
    text-align: center;
  }
`;

const WorldMap = () => {
  const [region, setRegion] = useState('europe');
  const [ranking, setRanking] = useState('final_rank');
  const [activeCountry, setActiveCountry] = useState(null);

  const regions = {
    europe: {
      name: 'Europe',
      scale: 600,
      translation: [600 / 2 - 100, 600 / 2 + 600],
    },
    northAmerica: {
      name: 'North America',
      scale: 350,
      translation: [600 / 2 + 500, 600 / 2 + 300],
    },
    southAmerica: {
      name: 'South America',
      scale: 350,
      translation: [600 / 2 + 350, 600 / 2 - 100],
    },
    world: {
      name: 'World',
      scale: 110,
      translation: [600 / 2 - 30, 600 / 2],
    },
  };
  const gradients = {
    final_rank: interpolateGnBu,
    corporate_rank: interpolateBuGn,
    income_rank: interpolateYlGn,
    consumptio0n_rank: interpolateYlOrBr,
    property_rank: interpolateYlOrRd,
    international_rank: interpolateRdPu,
  };

  const rankings = useIndexRankings();

  const projection = geoRobinson()
    .scale(regions[region].scale)
    .translate(regions[region].translation);
  const path = geoPath(projection);
  const { features } = feature(world, world.objects.countries);
  const scaleRanks = scaleLinear()
    .domain([0, rankings.length])
    .range([0, 1]);

  const countries = features.map((c, i) => {
    const country = rankings.find(r => r.ISO_3 === c.id);
    return (
      c.id !== 'ATA' && (
        <path
          d={path(c)}
          id={`country-${c.id}`}
          key={`country-${c.id}-${i}`}
          onMouseEnter={() => country && setActiveCountry(country)}
          stroke="#ffffff"
          strokeWidth="0.1"
          strokeLinejoin="bevel"
          fill={
            country ? gradients[ranking](scaleRanks(country[ranking])) : '#bbb'
          }
        />
      )
    );
  });

  return (
    <Container>
      <svg
        style={{ border: '1px solid #bbb', gridArea: 'map' }}
        width="100%"
        viewBox="0 0 600 600"
      >
        <g>{countries}</g>
      </svg>
      <StyledBox style={{ gridArea: 'data' }}>
        <h2>{activeCountry ? `${activeCountry.country}'s Rankings` : 'Hover Over a Country'}</h2>
        {activeCountry && <table>
          <thead>
            <tr>
              <th>Tax Type</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {ranks.map(rank => <tr>
              <td>{rank.name}</td>
              <td>{activeCountry[`${rank.id}_rank`]}</td>
            </tr>)}
          </tbody>
        </table>}
      </StyledBox>
      <StyledBox style={{ gridArea: 'region' }}>
        <h2>Select a View</h2>
        {Object.keys(regions).map(k => (
          <p onClick={() => setRegion(k)}>{regions[k].name}</p>
        ))}
      </StyledBox>
    </Container>
  );
};

export default WorldMap;
