import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const TopAndBottom = () => {
  const { allIndexCsv } = useStaticQuery(graphql`
    query theList {
      allIndexCsv {
        edges {
          node {
            country
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
          <li>{topFive.map(n => n.country)}</li>
        </ol>
      </section>
      <section>
        <h3>Bottom Five</h3>
        <ol>
          <li>{bottomFive.map(n => n.country)}</li>
        </ol>
      </section>
    </div>
  );
};

export default TopAndBottom;
