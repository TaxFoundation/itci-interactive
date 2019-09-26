import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledBox from './StyledBox';

const StyledRankingsTable = styled.table`
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

const RankingsTable = ({ activeCountry, ranks }) => (
  <StyledBox>
    <h2>
      {activeCountry
        ? `${activeCountry.country}'s Rankings`
        : 'Hover Over a Country'}
    </h2>
    {activeCountry ? (
      <StyledRankingsTable>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Tax Type</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {ranks.map(rank => (
            <tr key={`rankings-table-${rank.id}`}>
              <RankName rank={rank.id}>{rank.name}</RankName>
              <td style={{ textAlign: 'right' }}>
                {`#${activeCountry[`${rank.id}_rank`]}`}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledRankingsTable>
    ) : (
      <p style={{ textAlign: 'center', padding: '1rem' }}>
        Hover over a country on the map to view its rankings here. Click the
        country to view more detail.
      </p>
    )}
  </StyledBox>
);

RankingsTable.propTypes = {
  activeCountry: PropTypes.object,
  ranks: PropTypes.arrayOf(PropTypes.object),
};

export default RankingsTable;
