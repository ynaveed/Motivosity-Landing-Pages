import React from 'react';
import PropTypes from 'prop-types';

const SecondSection = ({ data }) => {
  const relative = { position: 'relative' };
  return (
    <div class="about-history" style={relative}>
      <div class="container">
        <div class="text-center history-title">
          <h2>A LITTLE HISTORY...</h2>
        </div>
        <div class="grid history-wrapper" style={relative}>
          <div class="grid-cell no-basis history-left">
            <div class="grid center formula-wrapper">
              <div class="grid-cell grow1 text-right formula-icon">
                <i class="icon-baffled" />
              </div>
              <div class="grid-cell grow1 text-center formula-text">
                <p>
                  Observation that <br />
                  workers need some love
                </p>
              </div>
            </div>
            <div class="grid justify-end formula-symbol">
              <p>&#43;</p>
            </div>
            <div class="grid center formula-wrapper">
              <div class="grid-cell grow1 text-right formula-icon">
                <div class="about-number">
                  <p class="prt-1">15</p>
                  <p class="prt-2">years</p>
                </div>
              </div>
              <div class="grid-cell grow1 text-center formula-text">
                <p>
                  15 years of figuring <br />
                  it out
                </p>
              </div>
            </div>
            <div class="grid justify-end formula-symbol">
              <p>&#61;</p>
            </div>
            <div class="grid center formula-wrapper">
              <div class="grid-cell grow1 text-right formula-icon">
                <i class="icon-motivosity" />
              </div>
              <div class="grid-cell grow1 text-center formula-text">
                <p>
                  Magically amazing <br />
                  results
                </p>
              </div>
            </div>
          </div>
          <div class="grid-cell noflex history-line">
            <span class="circle" />
            <div class="line" />
          </div>
          <div class="grid-cell no-basis history-right">
            <div class="history-text">
              <p>
                {' '}
                Once there was a CEO (Scott Johnson, founder & CEO of Workfront)
                that couldn't believe how easy it was for managers everywhere to
                get overly focused on results and underly focused on taking care
                of people.
                <br />
                <br />
                Fortunately for the world, that guy had spent 15 years ﬁguring
                out how to make work more meaningful. Double bonus was that he
                was a software tech entrepreneur who had already built a large
                enterprise software company and was totally capable of making
                the best workforce engagement solution the enterprise had ever
                seen... and he started waking up in the middle of the night
                bugged by the fact that great people everywhere are not super
                happy about what they do or who they do it for.
                <br />
                <br />
                That was in 2013. Today, Motivosity is driving amazing results
                for companies across the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
