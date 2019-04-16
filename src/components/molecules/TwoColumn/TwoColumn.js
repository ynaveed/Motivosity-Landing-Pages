import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { ifProp } from '../../../helpers/general';
import { Grid, GridCell } from '../../atoms/Structure/Structure';

const TwoColumn = ({ rightSection, leftSection }) => {
  <Grid>
    <GridCell>{leftSection}</GridCell>
    <GridCell>{rightSection}</GridCell>
  </Grid>;
};

export default TwoColumn;
