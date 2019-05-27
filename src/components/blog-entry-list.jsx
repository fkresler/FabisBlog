import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlogEntryShort from './blog-entry-short';

const StyledBlogEntryList = styled.div`
  max-width: 100%;
  display: grid;
  grid-gap: 10px;

  /* no grid support? */
  display: flex;
  flex-wrap: wrap;

  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);

  & > * {
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 200px;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;

    &:first-child {
      margin-left: 5px;
      margin-right: 5px;
      flex: 0 1 100%;
      grid-column: 1 / -1;
    }

    @supports (display: grid) {
      margin: 0;
    }
  }
`;

const BlogEntryList = (props) => {
  const { posts } = props;
  return (
    <StyledBlogEntryList>
      {posts.map(({ node }) => (
        <BlogEntryShort key={node.fields.slug} node={node} />
      ))}
    </StyledBlogEntryList>
  );
};

BlogEntryList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default BlogEntryList;
