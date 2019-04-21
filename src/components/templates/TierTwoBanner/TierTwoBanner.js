import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const TierTwoBanner = ({ title, imgsrc, icon, ...rest }) => {
  const imageComponent = imgsrc ? <Img src={imgsrc} class="title-icon" /> : '';
  const iconComponent = icon ? (
    <div class="title-icon">
      <i class={`icon-${icon}`} />
    </div>
  ) : (
    ''
  );

  return (
    <div class="tier2-banner">
      <div class="container grid center justify-space row-orient">
        <div class="grid-cell">
          <div class="title">{title}</div>
        </div>
        <div class="grid-cell text-right">
          {imageComponent}
          {iconComponent}
        </div>
      </div>
    </div>
  );
};

export default TierTwoBanner;
