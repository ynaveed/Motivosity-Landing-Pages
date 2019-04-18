import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Content, { HTMLContent } from '../Content';
import TierTwoBanner from '../templates/TierTwoBanner/TierTwoBanner';

import PreviewCompatibleImage from '../PreviewCompatibleImage';

const FirstSection = ({ sectionData }) => {
  return '';
};

export const AboutUsTemplate = ({
  title,
  content,
  contentComponent,
  section,
}) => {
  const PageContent = contentComponent || Content;
  console.log(section);
  return (
    <React.Fragment>
      {/* <TierTwoBanner title={title} /> */}
      {/* <FirstSection sectionData={section} /> */}
    </React.Fragment>
  );
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
        section={post.frontmatter.section}
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
        section {
          title
          description_one
          ceo_message
          description_two
          image {
            childImageSharp {
              fluid(maxWidth: 460, quality: 85) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
