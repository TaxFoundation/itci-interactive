import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useIndexRankings } from '../data/useIndexRankings';

const IndexPage = () => {
  const rankings = useIndexRankings();
  return (
    <Layout>
      <SEO />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Overall Rank</th>
            <th>Corporate Taxes</th>
            <th>Individual Taxes</th>
            <th>Consumption Taxes</th>
            <th>Property Taxes</th>
            <th>International Tax Rates</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map(country => (
            <tr key={`rankings-table-${country.ISO_3}`}>
              <td>{country.country}</td>
              <td>{country.final_rank}</td>
              <td>{country.corporate_rank}</td>
              <td>{country.income_rank}</td>
              <td>{country.consumption_rank}</td>
              <td>{country.property_rank}</td>
              <td>{country.international_rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default IndexPage;
