import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const BlogEntryShort = (props) => {
  const { node } = props;
  const title = node.frontmatter.title || node.fields.slug;
  return (
    <div>
      <h3>
        <Link to={node.fields.slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  );
};

export default BlogEntryShort;
