import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { kebabCase } from 'lodash';

import { useIndexRankings } from '../data/useIndexRankings';
import flags from '../data/flags.json';

const StyledRankingsTable = styled.table`
  border: 1px solid ${props => props.theme.borderColor};
  table-layout: fixed;
  width: 100%;

  th,
  td {
    font-size: 1rem;
    line-height: 1;
    padding: 0.5rem;
    vertical-align: middle;
  }
`;

const RankHeading = styled.th`
  border-bottom: 5px solid
    ${props =>
      props.color ? props.theme[props.color] : props.theme.borderColor};
  border-left: 1px solid ${props => props.theme.borderColor};
  border-right: 1px solid ${props => props.theme.borderColor};
  font-weight: 700;
  text-align: ${props => props.align || 'center'};
`;

const Country = styled.td`
  border: 1px solid ${props => props.theme.borderColor};
  font-weight: 700;

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
  border: 1px solid ${props => props.theme.borderColor};
  text-align: center;
`;

const RanksingsTable = () => {
  const rankings = useIndexRankings();
  return (
    <StyledRankingsTable>
      <thead>
        <tr>
          <RankHeading>Country</RankHeading>
          <RankHeading color="overall">Overall Rank</RankHeading>
          <RankHeading color="corporate">Corporate Taxes</RankHeading>
          <RankHeading color="income">Individual Taxes</RankHeading>
          <RankHeading color="consumption">Consumption Taxes</RankHeading>
          <RankHeading color="property">Property Taxes</RankHeading>
          <RankHeading color="international">
            International Tax Rates
          </RankHeading>
        </tr>
      </thead>
      <tbody>
        {rankings.map(country => (
          <tr key={`rankings-table-${country.ISO_3}`}>
            <Country>
              <Link to={`/${kebabCase(country.country)}`}>
                <div aria-hidden="true">{flags[country.ISO_3]}</div>
                <div>{country.country}</div>
              </Link>
            </Country>
            <Rank>{country.final_rank}</Rank>
            <Rank>{country.corporate_rank}</Rank>
            <Rank>{country.income_rank}</Rank>
            <Rank>{country.consumption_rank}</Rank>
            <Rank>{country.property_rank}</Rank>
            <Rank>{country.international_rank}</Rank>
          </tr>
        ))}
      </tbody>
    </StyledRankingsTable>
  );
};

export default RanksingsTable;
