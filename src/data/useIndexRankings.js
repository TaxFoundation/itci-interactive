import { useStaticQuery, graphql } from 'gatsby';

const useIndexRankings = () => {
  const { allIndexCsv } = useStaticQuery(graphql`
    query rankings {
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
  return allIndexCsv.edges.map(node => node.node);
};

export default useIndexRankings;
