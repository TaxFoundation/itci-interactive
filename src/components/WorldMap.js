import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import regions from '../data/regions.json';
import useIndexRankings from '../data/useIndexRankings';
import Divider from './Divider';
import Loader from './Loader';
import RankSelector from './world-map/RankSelector';
import MapLegend from './world-map/MapLegend';
import RankingsTable from './world-map/RankingsTable';
import RegionSelector from './world-map/RegionSelector';

const WorldMapSectionContainer = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'map'
    'region';
  margin: 1rem 0 0;

  @media screen and (min-width: 850px) {
    grid-template: 360px auto / minmax(600px, 2fr) 1fr;
    grid-template-areas:
      'map data'
      'map region';
  }
`;

const MapContainer = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  grid-area: map;
  position: relative;
`;

const StyledPath = styled.path`
  fill: ${props => props.bg};
  stroke: ${props => props.theme.white};
  transition: fill 0.2s ease-in-out, stroke-width 0.2s linear;
  stroke-linejoin: bevel;
  stroke-width: ${props => (props.active ? 2 : 1)};
`;

const ConditionalLink = ({ url, children }) =>
  url ? (
    <Link to={url} tabindex="-1">
      {children}
    </Link>
  ) : (
    children
  );

ConditionalLink.propTypes = {
  url: PropTypes.string,
  children: PropTypes.element.isRequired,
};

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

  const mapDimension = 600;

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
    .translate([
      mapDimension / 2 + regions[region].dx,
      mapDimension / 2 + regions[region].dy,
    ]);
  const path = geoPath(projection);
  const scaleRanks = scaleLinear()
    .domain([1, rankings.length])
    .range([0, 1]);

  const countries = mapData.map((c, i) => {
    const country = rankings.find(r => r.ISO_3 === c.id);
    const url = country ? `/${kebabCase(country.country)}` : null;

    return (
      c.id !== 'ATA' && (
        <ConditionalLink
          key={`country-${kebabCase(c.properties.name)}`}
          url={url}
        >
          <StyledPath
            d={path(c)}
            id={`country-${c.id}`}
            onMouseEnter={() => country && setActiveCountry(country)}
            active={
              country && activeCountry && country.ISO_3 === activeCountry.ISO_3
            }
            bg={
              country
                ? gradients[ranking](scaleRanks(country[ranking]))
                : '#bbb'
            }
          />
        </ConditionalLink>
      )
    );
  });

  return (
    <>
      <RankSelector
        activeRank={ranking}
        ranks={ranks}
        setRanking={setRanking}
      />
      <WorldMapSectionContainer>
        {isLoading ? (
          <MapContainer>
            <Loader style={{ border: '1px solid #bbb', gridArea: 'map' }}>
              Map is Loading...
            </Loader>
          </MapContainer>
        ) : (
          <MapContainer>
            <svg
              height="100%"
              width="100%"
              preserveAspectRatio="xMidYMid slice"
              viewBox={`0 0 ${mapDimension} ${mapDimension}`}
            >
              <rect
                x="0"
                y="0"
                width={mapDimension}
                height={mapDimension}
                fill="hsl(205, 100%, 90%)"
              ></rect>
              <g>{countries}</g>
            </svg>
            <MapLegend
              style={{ position: 'absolute', bottom: '0' }}
              interpolator={gradients[ranking]}
              steps={20}
            ></MapLegend>
          </MapContainer>
        )}
        <RankingsTable activeCountry={activeCountry} ranks={ranks} />
        <RegionSelector
          area="region"
          regions={regions}
          region={region}
          setRegion={setRegion}
        />
      </WorldMapSectionContainer>
      <Divider />
    </>
  );
};

export default WorldMap;
