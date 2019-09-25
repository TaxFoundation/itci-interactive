import React from 'react';
import { scaleLinear } from 'd3-scale';

const MapLegend = ({ mapHeight, interpolator, steps, height, width }) => {
  const scaleLegend = scaleLinear()
    .domain([0, steps - 1])
    .range([0, 1]);

  const Rect = ({ i }) => {
    console.log(width, steps, i);
    return (
      <rect
        x={100 + (width / steps) * i}
        y={mapHeight - height}
        height={height}
        width={width / steps}
        fill={interpolator(scaleLegend(i))}
      ></rect>
    );
  };

  const rects = Array.from({ length: steps }, (v, i) => <Rect i={i} />);

  return (
    <g>
      <rect
        fill="#fff"
        x="0"
        y={mapHeight - height}
        width="100"
        height={height}
      ></rect>
      <text x="8" y={mapHeight - height / 3} width="100" height={height}>
        Higher Rank
      </text>
      {rects}
      <rect
        fill="#fff"
        x={width}
        y={mapHeight - height}
        width="100"
        height={height}
      ></rect>
      <text
        x={mapHeight - 8}
        y={mapHeight - height / 3}
        width="100"
        height={height}
        textAnchor="end"
      >
        Lower Rank
      </text>
    </g>
  );
};

export default MapLegend;
