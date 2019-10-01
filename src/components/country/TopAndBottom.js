import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

const StyledCountry = styled.li`
  border-bottom: 1px solid ${props => props.theme.borderColor};

  &:last-child {
    border: none;
  }
`;

const StyledLink = styled(Link)`
  background-color: ${props =>
    props.active ? props.theme.lightOrange : props.theme.white};
  color: ${props => props.theme.color};
  display: block;
  padding: 0.25rem;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.lightOrange};
  }
`;

const TopBottomHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Country = ({ country, active }) => (
  <StyledCountry>
    <StyledLink active={active} to={`/${kebabCase(country.country)}`}>
      {`#${country.final_rank} ${country.country}`}
    </StyledLink>
  </StyledCountry>
);

Country.propTypes = {
  active: PropTypes.bool,
  country: PropTypes.object.isRequired,
};

const TopAndBottom = ({ currentCountryISO3 }) => {
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
  console.log(currentCountryISO3);

  return (
    <div>
      <section>
        <TopBottomHeading>Top Five</TopBottomHeading>
        <ol>
          {topFive.map(country => (
            <Country
              key={`country-rankings-${country.ISO_3}`}
              country={country}
              active={currentCountryISO3 === country.ISO_3}
            />
          ))}
        </ol>
      </section>
      <section>
        <TopBottomHeading>Bottom Five</TopBottomHeading>
        <ol>
          {bottomFive.map(country => (
            <Country
              key={`country-rankings-${country.ISO_3}`}
              country={country}
              active={currentCountryISO3 === country.ISO_3}
            />
          ))}
        </ol>
      </section>
    </div>
  );
};

TopAndBottom.propTypes = {
  currentCountryISO3: PropTypes.string.isRequired,
};

export default TopAndBottom;
