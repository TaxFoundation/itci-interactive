import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import WorldMap from '../components/WorldMap';
import RankingsTable from '../components/RankingsTable';

const Description = styled.div`
  p {
    margin-bottom: 1rem;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO />
    <WorldMap />
    <Description>
      <p>
        The Tax Foundation’s{' '}
        <a
          href="https://taxfoundation.org/publications/international-tax-competitiveness-index/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>International Tax Competitiveness Index</em>
        </a>{' '}
        (<em>ITCI</em>) measures the degree to which the 36 OECD countries’ tax
        systems promote competitiveness through low tax burdens on business
        investment and neutrality through a well-structured tax code. The{' '}
        <em>ITCI</em>
        considers more than 40 variables across five categories: Corporate
        Taxes, Individual Taxes, Consumption Taxes, Property Taxes, and
        International Tax Rules.
      </p>
      <p>
        The <em>ITCI</em> attempts to display not only which countries provide
        the best tax environment for investment but also the best tax
        environment to start and grow a business.
      </p>
    </Description>
    <RankingsTable />
  </Layout>
);

export default IndexPage;
