import React from 'react';
import PropTypes from 'prop-types';

import building from '../../../../img/about/buildings.png';
import people from '../../../../img/about/people.png';

const ThirdSection = ({ data }) => {
  const relative = { position: 'relative' };
  const zIndex = { zIndex: '100' };
  const marginZero = { margin: '0' };
  return (
    <React.Fragment>
      <div class="about-history-contd">
        <div class="container history-contd-wrapper" style={relative}>
          <div class="line-container">
            <div class="history-line-1" />
            <div class="history-line-2" />
            <div class="history-line-3" />
          </div>
          <div class="grid items-wrapper">
            <div class="grid-cell center" style={zIndex}>
              <div class="popover">
                <p style={marginZero}>
                  Thousands of <br />
                  Happy Users
                </p>
                <div class="popover-arrow" />
              </div>
              <img src={building} width="225" height="225" />
            </div>
            <div class="grid-cell center" style={zIndex}>
              <div class="popover">
                <p style={marginZero}>
                  Driving Company
                  <br />
                  Success
                </p>
                <div class="popover-arrow" />
              </div>
              <img src={people} width="225" height="225" />
            </div>
          </div>
        </div>
      </div>
      <div class="about-awards-rec" style={relative}>
        <div class="grid container">
          <div class="line-container">
            <div class="awards-line-1">
              <div class="circle1" />
            </div>
            <div class="awards-line-2">
              <div class="circle2" />
            </div>
            <div class="awards-line-3" />
          </div>
          <div class="grid-cell center">
            <h2>AWARDS AND RECOGNITION</h2>
            <div class="awards-rec-text">
              <p>
                Motivosity has received some of the 'disruptive technology’ and
                'top 50’ this or that awards, but the only award we care about
                is whether or not your employees tell you that the best thing
                you’ve ever done is to “Bring in Motivosity”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThirdSection;
