import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../Layout';
import Content, { HTMLContent } from '../../Content';
import TierTwoBanner from '../../templates/TierTwoBanner';
import './style.scss';

import PreviewCompatibleImage from '../../PreviewCompatibleImage';

const FirstSection = ({ sectionData }) => {
  return (
    <div class="about-mission">
      <div className="grid center container mission-wrapper">
        <div class="line-container">
          <div className="mission-line-1" />
          <div className="mission-line-2" />
          <div className="mission-line-3" />
          <div className="mission-line-4" />
        </div>
        <div className="grid-cell no-basis mission-left">
          <div className="mission-title">
            <h2>OUR MISSION</h2>
          </div>
          <div className="mission-text1">
            <p>
              Life is short and we spend a lot of our waking hours in the ofﬁce.
              We think that life at work can and should be just as meaningful
              and satisifying as life off the clock. Everything we do is
              designed to lead to this end.
            </p>
          </div>
          <div className="mission-quote">
            <blockquote cite="http://">
              <p>
                “What I love about Motivosity, and why it's a unique experience
                in my career, is that every day we get this huge amount of
                appreciation from our customers and their employees. Every day
                I'm grateful that we can do something that makes people happier
                to be where they are"
                <footer>Scott Johnson Founder & CEO. Motivosity</footer>
              </p>
            </blockquote>
          </div>
          <div className="mission-text2">
            <p>
              We're called "MVers” [moovers] and yes, we’re a small group of
              people who aim to move the world. Each one of us at Motivosity is
              here primarily because they care improving the value of the
              workplace in people's lives.
            </p>
          </div>
        </div>
        <div className="grid-cell no-basis text-center mission-right">
          <div className="mission-image">
            <img
              src="{{ pathToResources }}img/landingPages/about/our-mission.png"
              alt="Our Mission"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutUsTemplate = ({
  title,
  content,
  contentComponent,
  section,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <TierTwoBanner title={title} icon="smile" />
      <FirstSection />
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
