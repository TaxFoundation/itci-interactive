const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query theIndex {
      allIndexCsv {
        edges {
          node {
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
        }
      }
    }
  `);
  result.data.allIndexCsv.edges.forEach(({ node }) => {
    createPage({
      path: _.kebabCase(node.country),
      component: path.resolve('./src/templates/country.js'),
      context: {
        ISO_2: node.ISO_2,
        ISO_3: node.ISO_3,
      },
    });
  });
};
