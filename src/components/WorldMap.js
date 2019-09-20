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
import useIndexRankings from '../data/useIndexRankings';

const WorldMap = () => {
  const [region, setRegion] = useState('world');
  const [ranking, setRanking] = useState('final_rank');
  const regions = {
    europe: {
      scale: 100,
      translation: [600 / 2, 400 / 2],
    },
    northAmerica: {
      scale: 100,
      translation: [600 / 2, 400 / 2],
    },
    southAmerica: {
      scale: 100,
      translation: [600 / 2, 400 / 2],
    },
    world: {
      scale: 100,
      translation: [600 / 2, 400 / 2],
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
      <path
        d={path(c)}
        id={`country-${c.id}`}
        key={`country-${c.id}-${i}`}
        stroke="#ffffff"
        strokeWidth="0.1"
        strokeLinejoin="bevel"
        fill={
          country ? gradients[ranking](scaleRanks(country[ranking])) : '#bbb'
        }
      />
    );
  });

  return (
    <div>
      <svg width="100%" viewBox="0 0 600 400">
        <g>{countries}</g>
      </svg>
    </div>
  );
};

export default WorldMap;
