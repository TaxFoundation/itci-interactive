import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import WorldMap from '../components/WorldMap';
import RankingsTable from '../components/RankingsTable';

const IndexPage = () => (
  <Layout>
    <SEO />
    <WorldMap />
    <RankingsTable />
  </Layout>
);

export default IndexPage;
