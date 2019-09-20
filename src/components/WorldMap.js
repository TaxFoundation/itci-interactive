import React from 'react';
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
  const rankings = useIndexRankings();
  const projection = geoRobinson()
    .scale(100)
    .translate([600 / 2, 400 / 2]);
  const path = geoPath(projection);
  const { features } = feature(world, world.objects.countries);

  const countries = features.map((c, i) => (
    <path
      d={path(c)}
      id={`country-${c.id}`}
      key={`country-${c.id}-${i}`}
      stroke="#ffffff"
      strokeWidth="0.1"
      strokeLinejoin="bevel"
    />
  ));

  return (
    <div>
      <svg width="100%" viewBox="0 0 600 400">
        <g>{countries}</g>
      </svg>
    </div>
  );
};

export default WorldMap;
