/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            root
          }
        }
        file(relativePath: { eq: "itci.png" }) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const theTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;

  const metaDefaults = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: theTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: 'og:image',
      content: `${site.siteMetadata.root}${file.childImageSharp.fluid.src}`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: theTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      property: 'twitter:image',
      content: `${site.siteMetadata.root}${file.childImageSharp.fluid.src}`,
    },
  ];

  meta.forEach(m => {
    const propExists = metaDefaults.find(d => d.property === m.property);
    if (propExists) {
      propExists.content = m.content;
    }
    if (!propExists) {
      metaDefaults.push(m);
    }
  });

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={theTitle}
      meta={metaDefaults}
    >
      <script
        type="text/javascript"
        src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d8e1e7aec6a6a96"
      ></script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
