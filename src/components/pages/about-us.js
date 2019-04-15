import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Content, { HTMLContent } from '../Content';
import TierTwoBanner from '../templates/TierTwoBanner/TierTwoBanner';

export const AboutUsTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return <TierTwoBanner title={title} />;
};

AboutUsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutUs = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutUsTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutUs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutUs;

export const aboutUsQuery = graphql`
  query AboutUs($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
