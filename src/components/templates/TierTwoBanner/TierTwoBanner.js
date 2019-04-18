import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';

const Banner = ({ title, ...rest }) => (
  <BannerContainer>
    <Grid container center justify-space row-orient>
      <GridCell>
        <BannerTitle>{title}</BannerTitle>
      </GridCell>
      <GridCell>:)</GridCell>
    </Grid>
  </BannerContainer>
);

export default Banner;
