import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

const BlogPostTemplate = (props) => {
  const { data, location, pageContext } = props;
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Image sizes={post.frontmatter.titleImage.childImageSharp.sizes} />
      <h1>
        {post.frontmatter.title}
        {' '}
      </h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <li>
          {previous && (
          <Link to={previous.fields.slug} rel="prev">
                ←
            {' '}
            {previous.frontmatter.title}
          </Link>
          )}
        </li>
        <li>
          {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title}
            {' '}
          </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        titleImage: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    previous: PropTypes.object.isRequired,
    next: PropTypes.object.isRequired,
  }).isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        titleImage {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
