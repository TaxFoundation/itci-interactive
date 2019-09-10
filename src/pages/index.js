import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useIndexRankings } from '../data/useIndexRankings';
import flags from '../data/flags.json';

const RankingsTable = styled.table`
  border: 1px solid ${props => props.theme.borderColor};

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
`;

const Rank = styled.td`
  border: 1px solid ${props => props.theme.borderColor};
  text-align: center;
`;

const IndexPage = () => {
  const rankings = useIndexRankings();
  return (
    <Layout>
      <SEO />
      <RankingsTable>
        <thead>
          <tr>
            <RankHeading align="left">Country</RankHeading>
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
              <Country>{`${flags[country.ISO_3]} ${country.country}`}</Country>
              <Rank>{country.final_rank}</Rank>
              <Rank>{country.corporate_rank}</Rank>
              <Rank>{country.income_rank}</Rank>
              <Rank>{country.consumption_rank}</Rank>
              <Rank>{country.property_rank}</Rank>
              <Rank>{country.international_rank}</Rank>
            </tr>
          ))}
        </tbody>
      </RankingsTable>
    </Layout>
  );
};

export default IndexPage;
