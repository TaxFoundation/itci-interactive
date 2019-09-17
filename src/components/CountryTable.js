import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { round } from 'lodash';

import ranks from '../data/ranks.json';

const StyledRankingsTable = styled.table`
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;

  th,
  td {
    border: 1px solid ${props => props.theme.borderColor};
    font-size: 1rem;
    padding: 0.5rem;
    vertical-align: middle;
    padding: 0.5rem;
  }

  caption {
    background-color: ${props => props.theme.orange};
    border: 1px solid ${props => props.theme.orange};
    color: ${props => props.theme.white};
    padding: 0.5rem;
  }
`;

const TableHeading = styled.th`
  background-color: ${props => props.theme.white};
  font-weight: 700;
  text-align: ${props => props.align || 'center'};
`;

const RankHeading = styled.td`
  border-right: 1px solid
    ${props => (props.name ? props.theme[props.name] : props.theme.borderColor)};
  box-shadow: inset -5px 0 ${props => (props.name ? props.theme[props.name] : props.theme.borderColor)};
  font-weight: 700;
  line-height: 1.4;

  a {
    align-items: center;
    color: ${props => props.theme.color};
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0.7rem;
    text-decoration: none;
  }
`;

const Rank = styled.td`
  text-align: center;
`;

const CountryTable = ({ rankings }) => (
  <StyledRankingsTable>
    <caption>{`${rankings.country}'s Rankings`}</caption>
    <thead>
      <tr>
        <TableHeading>Country</TableHeading>
        <TableHeading>Rank</TableHeading>
        <TableHeading>Score</TableHeading>
      </tr>
    </thead>
    <tbody>
      {ranks.map(rank => (
        <tr key={`country-table-${rank.id}`}>
          <RankHeading name={rank.id}>{rank.name}</RankHeading>
          <Rank>{rankings[`${rank.id}_rank`]}</Rank>
          <Rank>{round(rankings[rank.id], 2)}</Rank>
        </tr>
      ))}
    </tbody>
  </StyledRankingsTable>
);

CountryTable.propTypes = {
  rankings: PropTypes.object.isRequired,
};

export default CountryTable;
