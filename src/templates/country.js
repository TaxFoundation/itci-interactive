import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import flags from '../data/flags.json';
import CountryTable from '../components/CountryTable';
import TopAndBottom from '../components/TopAndBottom';
import Profiles from '../components/Profiles';

const CountryHeading = styled.h1`
  color: ${props => props.theme.orange};
  font-family: ${props => props.theme.fontFamilies.oswald};
  font-size: 3rem;
  font-weight: ${props => props.theme.fontWeight};
  text-align: center;
  text-transform: uppercase;
`;

const Summary = styled.p`
  background-color: ${props => props.theme.tfBlueHighlight};
  margin: 1rem 0;
  padding: 1rem;
  text-align: center;
`;

const DataGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 25%;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${props => props.theme.borderColor};
  margin: 1rem 0;
  width: 100%;
`;

const country = ({ data }) => {
  const theCountry = { ...data.indexCsv, ...data.profilesCsv };

  return (
    <Layout>
      <SEO title={theCountry.country} />
      <CountryHeading>{`${flags[theCountry.ISO_3]} ${
        theCountry.country
      }`}</CountryHeading>
      <Summary>{theCountry.ranking}</Summary>
      <DataGrid>
        <CountryTable rankings={data.indexCsv} />
        <div>Map Goes Here</div>
        <TopAndBottom />
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
