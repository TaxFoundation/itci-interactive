import React from 'react';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';

const StyledLegend = styled.div`
  display: grid;
  grid-template: auto / auto repeat(${props => props.steps}, 1fr) auto;
  width: 100%;
`;

const StyledLabels = styled.div`
  background-color: ${props => props.theme.white};
  padding: 0.5rem;
`;

const StyledRect = styled.div`
  background-color: ${props => props.bg};
`;

const MapLegend = ({ interpolator, steps, style }) => {
  const scaleLegend = scaleLinear()
    .domain([0, steps - 1])
    .range([0, 1]);

  const Rect = ({ i }) => (
    <StyledRect bg={interpolator(scaleLegend(i))}></StyledRect>
  );

  const rects = Array.from({ length: steps }, (v, i) => <Rect i={i} />);

  return (
    <StyledLegend steps={steps} style={style}>
      <StyledLabels>Higher Rank</StyledLabels>
      {rects}
      <StyledLabels>Lower Rank</StyledLabels>
    </StyledLegend>
  );
};

export default MapLegend;
