import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CountryTable from '../components/country/CountryTable';
import TopAndBottom from '../components/country/TopAndBottom';
import Profiles from '../components/country/Profiles';
import Divider from '../components/Divider';

const CountryHeading = styled.h1`
  color: ${props => props.theme.orange};
  font-family: ${props => props.theme.fontFamilies.oswald};
  font-size: 3rem;
  font-weight: ${props => props.theme.fontWeight};
  text-align: center;
  text-transform: uppercase;
`;

const Summary = styled.p`
  background-color: ${props => props.theme.lightOrange};
  margin: 0;
  padding: 1rem;
  text-align: center;
`;

const DataGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'summary'
    'table'
    'comparison';

  @media screen and (min-width: 700px) {
    grid-template: repeat(2, auto) / 1fr 2fr;
    grid-template-areas:
      'table summary'
      'table comparison';
  }
`;

const country = ({ data }) => {
  const theCountry = { ...data.indexCsv, ...data.profilesCsv };

  return (
    <Layout>
      <SEO title={theCountry.country} />
      <CountryHeading>{theCountry.country}</CountryHeading>
      <DataGrid>
        <CountryTable style={{ gridArea: 'table' }} rankings={data.indexCsv} />
        <Summary style={{ gridArea: 'summary' }}>{theCountry.ranking}</Summary>
        <TopAndBottom
          style={{ gridArea: 'comparison' }}
          currentCountryISO3={theCountry.ISO_3}
        />
      </DataGrid>
      <Divider />
      <Profiles profiles={data.profilesCsv}></Profiles>
    </Layout>
  );
};

country.propTypes = {
  data: PropTypes.object.isRequired,
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
    profilesCsv(ISO_3: { eq: $ISO_3 }) {
      ranking
      strength_1
      strength_2
      strength_3
      weakness_1
      weakness_2
      weakness_3
    }
  }
`;
