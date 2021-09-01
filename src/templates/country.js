import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CountryTable from '../components/country/CountryTable';
import TopAndBottom from '../components/country/TopAndBottom';
import Profiles from '../components/country/Profiles';
import Divider from '../components/Divider';
import { OrangeButton } from '../components/Button';

const CountryHeading = styled.h1`
  color: ${props => props.theme.orange};
  font-family: ${props => props.theme.fontFamilies.oswald};
  font-size: 3rem;
  font-weight: ${props => props.theme.fontWeight};
  margin: 1rem 0;
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
      <SEO
        title={theCountry.country}
        meta={[
          {
            property: 'og:image',
            content: `${data.site.siteMetadata.root}${data.file.childImageSharp.fluid.src}`,
          },
          {
            property: 'twitter:image',
            content: `${data.site.siteMetadata.root}${data.file.childImageSharp.fluid.src}`,
          },
        ]}
      />
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
      <Divider />
      <OrangeButton
        style={{ maxWidth: '480px', margin: '0.5rem auto' }}
        as="a"
        href={`https://taxfoundation.org/country/${kebabCase(
          theCountry.country
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Learn more about the tax system in ${theCountry.country}`}
      </OrangeButton>
    </Layout>
  );
};

country.propTypes = {
  data: PropTypes.object.isRequired,
};

export default country;

export const query = graphql`
  query($ISO_3: String!, $ISO_2: String!) {
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
      crossborder_rank
      crossborder
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
    site {
      siteMetadata {
        root
      }
    }
    file(name: { eq: $ISO_2 }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;
