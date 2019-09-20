import React, { useState } from 'react';
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
    font-size: calc(0.5rem + 0.4vw);
    line-height: 1;
    padding: 0.5rem;
    vertical-align: middle;
  }
`;

const RankHeading = styled.th`
  background-color: ${props => props.theme.white};
  border-bottom: 5px solid
    ${props => (props.name ? props.theme[props.name] : props.theme.borderColor)};
  border-left: 1px solid ${props => props.theme.borderColor};
  border-right: 1px solid ${props => props.theme.borderColor};
  cursor: pointer;
  font-weight: 700;
  text-align: ${props => props.align || 'center'};
  transition: 0.2s ease-in-out background-color;

  div {
    padding-right: 0.5rem;
    position: relative;

    &::after,
    &::before {
      border: 4px solid transparent;
      content: '';
      display: block;
      height: 0;
      right: 0;
      top: 50%;
      position: absolute;
      width: 0;
    }

    &::before {
      border-bottom-color: ${props =>
        props.ascending && props.orderedBy === `${props.name}_rank`
          ? props.theme.color
          : props.theme.borderColor};
      margin-top: -9px;
    }

    &::after {
      border-top-color: ${props =>
        !props.ascending && props.orderedBy === `${props.name}_rank`
          ? props.theme.color
          : props.theme.borderColor};
      margin-top: 1px;
    }
  }

  &:hover {
    background-color: ${props => props.theme.tfBlueHighlight};
  }
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
  const [orderedBy, setOrderedBy] = useState('country');
  const [isAscending, setIsAscending] = useState(true);
  const order = attribute => {
    if (attribute === orderedBy) {
      setIsAscending(!isAscending);
    } else {
      setOrderedBy(attribute);
    }
  };

  rankings.sort((a, b) =>
    isAscending ? a[orderedBy] - b[orderedBy] : b[orderedBy] - a[orderedBy]
  );

  return (
    <StyledRankingsTable>
      <thead>
        <tr>
          <RankHeading
            ascending={isAscending}
            orderedBy={orderedBy}
            onClick={() => order('country_rank')}
            name="country"
          >
            <div>Country</div>
          </RankHeading>
          <RankHeading
            ascending={isAscending}
            orderedBy={orderedBy}
            onClick={() => order('final_rank')}
            name="final"
          >
            <div>Overall Rank</div>
          </RankHeading>
          <RankHeading
            ascending={isAscending}
            orderedBy={orderedBy}
            onClick={() => order('corporate_rank')}
            name="corporate"
          >
            <div>Corporate Taxes</div>
          </RankHeading>
          <RankHeading
            ascending={isAscending}
            orderedBy={orderedBy}
            onClick={() => order('income_rank')}
            name="income"
          >
            <div>Individual Taxes</div>
          </RankHeading>
          <RankHeading
            ascending={isAscending}
            orderedBy={orderedBy}
            onClick={() => order('consumption_rank')}
            name="consumption"
          >
            <div>Consumption Taxes</div>
          </RankHeading>
          <RankHeading
            ascending={isAscending}
            orderedBy={orderedBy}
            onClick={() => order('property_rank')}
            name="property"
          >
            <div>Property Taxes</div>
          </RankHeading>
          <RankHeading
            ascending={isAscending}
            orderedBy={orderedBy}
            onClick={() => order('international_rank')}
            name="international"
          >
            <div>International Tax Rates</div>
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
