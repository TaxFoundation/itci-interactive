import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import flags from '../data/flags.json';

const country = ({ data }) => {
  const theCountry = data.indexCsv;

  return (
    <Layout>
      <SEO title={theCountry.country} />
      <h1>{`${flags[theCountry.ISO_3]} ${theCountry.country}`}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  );
};

export default country;

export const query = graphql`
  query($ISO_3: String!) {
    indexCsv(ISO_3: { eq: $ISO_3 }) {
      ISO_2
      ISO_3
      country
      year
      corporate_rate
      loss_carryback
      loss_carryforward
      machines_cost_recovery
      buildings_cost_recovery
      intangibles_cost_recovery
      inventory
      patent_box
      r_and_d_credit
      corporate_time
      profit_payments
      other_payments
      top_income_rate
      threshold_top_income_rate
      tax_wedge
      labor_payments
      labor_time
      capital_gains_rate
      index_capital_gains
      dividends_rate
      vat_rate
      vat_threshold
      vat_base
      consumption_time
      property_tax
      property_tax_collections
      net_wealth
      estate_or_inheritance_tax
      transfer_tax
      asset_tax
      capital_duties
      financial_transaction_tax
      dividends_exemption
      capital_gains_exemption
      country_limitations
      dividends_withholding_tax
      interest_withholding_tax
      royalties_withholding_tax
      tax_treaties
      cfc_rules
      thin_capitalization_rules
    }
  }
`;
