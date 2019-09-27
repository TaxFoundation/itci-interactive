import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import MailChimp from '../components/MailChimp';

const SubscribePage = () => (
  <Layout>
    <SEO />
    <MailChimp></MailChimp>
  </Layout>
);

export default SubscribePage;
