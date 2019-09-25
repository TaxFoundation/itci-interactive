import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import axios from 'axios';
import { geoPath } from 'd3-geo';
import { geoRobinson } from 'd3-geo-projection';
import { scaleLinear } from 'd3-scale';
import {
  interpolateGnBu,
  interpolatePuBuGn,
  interpolateYlGn,
  interpolateYlOrBr,
  interpolateYlOrRd,
  interpolateYlGnBu,
} from 'd3-scale-chromatic';
import { feature } from 'topojson-client';
import { kebabCase } from 'lodash';

import ranks from '../data/ranks.json';
import useIndexRankings from '../data/useIndexRankings';
import Divider from './Divider';
import Loader from './Loader';

const Container = styled.div`
  display: block;
  margin: 1rem 0;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-gap: 1rem;
    grid-template: 330px auto / minmax(500px, 2fr) 1fr;
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

const RankTypeSelector = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    display: flex;
    flex-wrap: nowrap;
  }
`;

const RankTypeSelectorRank = styled.div`
  background-color: ${props =>
    props.active ? props.theme.lightOrange : props.theme.white};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  border-left: 1px solid ${props => props.theme.borderColor};
  border-top: 3px solid ${props => props.theme[props.rank]};
  color: ${props => props.theme.color};
  cursor: pointer;
  flex: 1 0 auto;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in-out background-color;

  &:last-child {
    border-right: 1px solid ${props => props.theme.borderColor};
  }

  &:active,
  &:focus,
  &:hover {
    background-color: ${props => props.theme.lightOrange};
    color: ${props => props.theme.color};
  }
`;

const WorldMap = () => {
  const [mapData, setMapData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState('europe');
  const [ranking, setRanking] = useState('final_rank');
  const [activeCountry, setActiveCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/world.json');
      const { features } = feature(result.data, result.data.objects.countries);
      setMapData(features);
      setIsLoading(false);
    };
    fetchData();
  }, []);

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
    final_rank: interpolateYlOrRd,
    corporate_rank: interpolateYlOrBr,
    income_rank: interpolateYlGn,
    consumption_rank: interpolatePuBuGn,
    property_rank: interpolateGnBu,
    international_rank: interpolateYlGnBu,
  };

  const rankings = useIndexRankings();

  const projection = geoRobinson()
    .scale(regions[region].scale)
    .translate(regions[region].translation);
  const path = geoPath(projection);
  const scaleRanks = scaleLinear()
    .domain([1, rankings.length])
    .range([0, 1]);

  const countries = mapData.map((c, i) => {
    const country = rankings.find(r => r.ISO_3 === c.id);
    const Path = () => (
      <path
        d={path(c)}
        id={`country-${c.id}`}
        onMouseEnter={() => country && setActiveCountry(country)}
        stroke="#ffffff"
        strokeWidth="1"
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
    return c.id !== 'ATA' && <Country key={`country-${c.id}-${i}`} />;
  });

  const Legend = ({ steps, height, width }) => {
    const scaleLegend = scaleLinear()
      .domain([0, steps - 1])
      .range([0, 1]);

    const rects = [...Array(steps).keys()].map(i => (
      <rect
        x={100 + (width / steps) * i}
        height={height}
        width={width / steps}
        fill={scaleLegend(i)}
      ></rect>
    ));
    return (
      <g>
        <rect
          fill="#fff"
          x="0"
          y={600 - height}
          width="100"
          height={height}
        ></rect>
        <text x="8" y={600 - height / 3} width="100" height={height}>
          Higher Rank
        </text>
        {rects}
        <rect
          fill="#fff"
          x={width}
          y={600 - height}
          width="100"
          height={height}
        ></rect>
        <text
          x={600 - 8}
          y={600 - height / 3}
          width="100"
          height={height}
          textAnchor="end"
        >
          Lower Rank
        </text>
      </g>
    );
  };

  return (
    <>
      <Container>
        {isLoading ? (
          <Loader style={{ border: '1px solid #bbb', gridArea: 'map' }}>
            Map is Loading...
          </Loader>
        ) : (
          <svg
            style={{ border: '1px solid #bbb', gridArea: 'map' }}
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 600 600"
          >
            <g>{countries}</g>
            <Legend steps={10} height={30} width={500}></Legend>
          </svg>
        )}
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
              Hover over a country on the map to view its rankings here. Click
              the country to view more detail.
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
              key={`region-selector-${k}`}
            >
              {regions[k].name}
            </RegionSelector>
          ))}
          <Disclaimer>
            Note: for purposes of data consistency, this Index only compares
            OECD countries.
          </Disclaimer>
        </StyledBox>
      </Container>
      <RankTypeSelector>
        {ranks.map(rank => (
          <RankTypeSelectorRank
            key={`rank-selector-${rank.id}`}
            rank={rank.id}
            active={`${rank.id}_rank` === ranking}
            onClick={() => {
              setRanking(`${rank.id}_rank`);
            }}
          >
            {rank.name}
          </RankTypeSelectorRank>
        ))}
      </RankTypeSelector>
      <Divider />
    </>
  );
};

export default WorldMap;
