import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import flags from '../data/flags.json';

const StyledCountryLink = styled(Link)`
  align-items: center;
  color: ${props => props.theme.color};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.7rem;
  text-decoration: none;
`;

const Country = ({ country }) => (
  <li>
    <StyledCountryLink to={`/${kebabCase(country.country)}`}>
      <div aria-hidden="true">{flags[country.ISO_3]}</div>
      <div>{country.country}</div>
    </StyledCountryLink>
  </li>
);

Country.propTypes = {
  country: PropTypes.object.isRequired,
};

const TopAndBottom = () => {
  const { allIndexCsv } = useStaticQuery(graphql`
    query theList {
      allIndexCsv {
        edges {
          node {
            country
            ISO_3
            final_rank
          }
        }
      }
    }
  `);
  const countries = allIndexCsv.edges
    .map(node => node.node)
    .sort((a, b) => a.final_rank - b.final_rank);
  const topFive = countries.slice(0, 5);
  const bottomFive = countries.slice(-5);

  return (
    <div>
      <section>
        <h3>Top Five</h3>
        <ol>
          {topFive.map(country => (
            <Country country={country} />
          ))}
        </ol>
      </section>
      <section>
        <h3>Bottom Five</h3>
        <ol>
          {bottomFive.map(country => (
            <Country country={country} />
          ))}
        </ol>
      </section>
    </div>
  );
};

export default TopAndBottom;
