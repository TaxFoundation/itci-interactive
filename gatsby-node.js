const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query theIndex {
      allIndexCsv {
        edges {
          node {
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
      }
    }
  `);
  result.data.allIndexCsv.edges.forEach(({ node }) => {
    createPage({
      path: _.kebabCase(node.country),
      component: path.resolve('./src/templates/country.js'),
      context: {
        ISO_3: node.ISO_3,
      },
    });
  });
};
