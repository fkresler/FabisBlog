import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const StyledCardTitleImage = styled.div`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  overflow: hidden;
`;

const BlogEntryShort = (props) => {
  const { node } = props;
  const title = node.frontmatter.title || node.fields.slug;
  return (
    <div>
      <StyledCardTitleImage>
        <Image sizes={node.frontmatter.titleImage.childImageSharp.sizes} />
      </StyledCardTitleImage>
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

BlogEntryShort.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      titleImage: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogEntryShort;
