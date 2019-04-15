import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { Grid, GridCell } from '../../atoms/Structure/Structure';

const BannerContainer = styled.div`
  background-color: #57bfe3;
  height: 250px;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

const BannerTitle = styled.div`
  font-size: 4.375rem;
  color: #ffffff;
  font-weight: bold;
  padding: 0px 0px 0px 100px;
  line-height: 70px;
`;

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
