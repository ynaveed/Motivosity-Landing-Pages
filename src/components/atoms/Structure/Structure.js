import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { ifProp } from '../../../helpers/general';

const flexStyles = css`
  ${ifProp(
    'container',
    css`
      position: relative;
      width: 100%;
      max-width: 1200px;
      padding: 0px 15px;
      margin: 0px auto;
      height: 100%;
    `
  )};
  ${ifProp(
    'wrap',
    css`
      flex: wrap;
    `
  )};
  ${ifProp(
    'column-orient',
    css`
      flex-direction: column;
    `
  )};
  ${ifProp(
    'row-orient',
    css`
      flex-direction: row;
    `
  )};
  ${ifProp(
    'center',
    css`
      align-items: center;
    `
  )};
  ${ifProp(
    'nowrap',
    css`
      flex-wrap: nowrap;
    `
  )};
  ${ifProp(
    'justify-center',
    css`
      justify-content: center;
    `
  )};
  ${ifProp(
    'justify-space',
    css`
      justify-content: space-between;
    `
  )};
`;

export const Grid = styled.div`
  display: flex;
  ${flexStyles}
`;

export const GridCell = styled.div`
  flex: 1 1 auto;
`;
