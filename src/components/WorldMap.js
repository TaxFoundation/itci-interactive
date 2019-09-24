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
import { kebabCase } from 'lodash';

import world from '../data/world.json';
import ranks from '../data/ranks.json';
import useIndexRankings from '../data/useIndexRankings';

const Container = styled.div`
  display: block;
  margin: 1rem 0;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-gap: 1rem;
    grid-template: 1fr auto / minmax(500px, 2fr) 1fr;
    grid-template-areas:
      'map data'
      'map region';
  }
`;

const StyledBox = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
  }

  h2 {
    background-color: ${props => props.theme.orange};
    border: 1px solid ${props => props.theme.orange};
    color: ${props => props.theme.white};
    margin: -1px;
    padding: 0.5rem;
    text-align: center;
  }
`;

const RankingsTable = styled.table`
  border-collapse: separate;
  font-size: 0.9rem;
  margin: 0.8rem auto;
  padding: 0.5rem;

  th,
  td {
    padding: 0.4rem;
  }

  th {
    font-weight: 700;
  }
`;

const RankName = styled.td`
  position: relative;
  text-align: left;

  &::before {
    background-color: ${props => props.theme[props.rank]};
    bottom: 0.3rem;
    content: '';
    left: -4px;
    position: absolute;
    top: 0.3rem;
    width: 4px;
  }
`;

const RegionSelector = styled.div`
  background-color: ${props =>
    props.active ? props.theme.lightOrange : props.theme.white};
  border: none;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-family: ${props => props.theme.fontFamilies.lato};
  padding: 0.5rem 1rem;
  text-align: center;
  transition: 0.2s ease-in-out background-color;

  &:hover {
    background-color: ${props => props.theme.lightOrange};
  }
`;

const Disclaimer = styled.p`
  color: #666;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
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
    const Path = () => (
      <path
        d={path(c)}
        id={`country-${c.id}`}
        key={`country-${c.id}-${i}`}
        onMouseEnter={() => country && setActiveCountry(country)}
        stroke="#ffffff"
        strokeWidth="0.2"
        strokeLinejoin="bevel"
        fill={
          country ? gradients[ranking](scaleRanks(country[ranking])) : '#bbb'
        }
      />
    );
    const Country = () =>
      country ? (
        <Link to={`/${kebabCase(country.country)}`}>
          <Path />
        </Link>
      ) : (
        <Path />
      );
    return c.id !== 'ATA' && <Country />;
  });

  return (
    <Container>
      <svg
        style={{ border: '1px solid #bbb', gridArea: 'map' }}
        height="100%"
        width="100%"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 600 600"
      >
        <g>{countries}</g>
      </svg>
      <StyledBox style={{ gridArea: 'data' }}>
        <h2>
          {activeCountry
            ? `${activeCountry.country}'s Rankings`
            : 'Hover Over a Country'}
        </h2>
        {activeCountry ? (
          <RankingsTable>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Tax Type</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {ranks.map(rank => (
                <tr>
                  <RankName rank={rank.id}>{rank.name}</RankName>
                  <td style={{ textAlign: 'right' }}>
                    {`#${activeCountry[`${rank.id}_rank`]}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </RankingsTable>
        ) : (
          <p style={{ textAlign: 'center', padding: '1rem' }}>
            Hover over a country on the map to view its rankings here. Click the
            country to view more detail.
          </p>
        )}
      </StyledBox>
      <StyledBox style={{ gridArea: 'region' }}>
        <h2>Select a View</h2>
        {Object.keys(regions).map(k => (
          <RegionSelector
            role="button"
            active={k === region}
            onClick={() => setRegion(k)}
          >
            {regions[k].name}
          </RegionSelector>
        ))}
        <Disclaimer>
          Note: for purposes of data consistency, this Index only compares OECD
          countries.
        </Disclaimer>
      </StyledBox>
    </Container>
  );
};

export default WorldMap;
