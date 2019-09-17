import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import flags from '../data/flags.json';
import TopAndBottom from '../components/TopAndBottom';

const country = ({ data }) => {
  const theCountry = data.indexCsv;

  return (
    <Layout>
      <SEO title={theCountry.country} />
      <h1>{`${flags[theCountry.ISO_3]} ${theCountry.country}`}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <TopAndBottom />
    </Layout>
  );
};

export default country;

export const query = graphql`
  query($ISO_3: String!) {
    indexCsv(ISO_3: { eq: $ISO_3 }) {
      country
      year
      corporate_rank
      corporate
      consumption_rank
      consumption
      property_rank
      property
      income_rank
      income
      international_rank
      international
      final_rank
      final
      ISO_2
      ISO_3
    }
  }
`;
