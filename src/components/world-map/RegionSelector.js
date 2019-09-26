import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledBox from './StyledBox';

const StyledRegionSelector = styled.div`
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

const RegionSelector = ({ area, regions, region, setRegion }) => (
  <StyledBox style={{ gridArea: area }}>
    <h2>Select a View</h2>
    {Object.keys(regions).map(k => (
      <StyledRegionSelector
        role="button"
        active={k === region}
        onClick={() => setRegion(k)}
        key={`region-selector-${k}`}
      >
        {regions[k].name}
      </StyledRegionSelector>
    ))}
    <Disclaimer>
      Note: for purposes of data consistency, this Index only compares OECD
      countries.
    </Disclaimer>
  </StyledBox>
);

RegionSelector.propTypes = {
  area: PropTypes.string,
  regions: PropTypes.object.isRequired,
  region: PropTypes.string.isRequired,
  setRegion: PropTypes.func.isRequired,
};

export default RegionSelector;
