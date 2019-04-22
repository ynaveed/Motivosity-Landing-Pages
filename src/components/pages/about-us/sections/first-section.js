import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../../../PreviewCompatibleImage';

const FirstSection = ({ sectionData }) => {
  const ImageStyle = { width: 460 };
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
            <h2>{sectionData.title}</h2>
          </div>
          <div className="mission-text1">
            <p>{sectionData.description_one}</p>
          </div>
          <div className="mission-quote">
            <blockquote cite="http://">
              <p>
                {sectionData.ceo_message}
                <footer>{sectionData.ceo_name}</footer>
              </p>
            </blockquote>
          </div>
          <div className="mission-text2">
            <p>{sectionData.description_two}</p>
          </div>
        </div>
        <div className="grid-cell no-basis text-center mission-right">
          <div className="mission-image">
            <PreviewCompatibleImage imageInfo={sectionData.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
