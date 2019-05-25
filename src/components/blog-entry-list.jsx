import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

import BlogEntryShort from './blog-entry-short';

const BlogEntryList = props => (
  <div>
    {props.posts.map(({ node }) => (
      <BlogEntryShort key={node.fields.slug} node={node} />
    ))}
  </div>
);

export default BlogEntryList;
