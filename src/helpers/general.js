/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import React from 'react';

/**
 * Use given style if prop is "true" or a given value
 */
export const ifProp = (prop, value, style) => props => {
  if (typeof style === 'undefined') {
    style = value;
    value = true;
  }

  if (props[prop] === value) {
    // if style is a function, call it with the props
    return typeof style === 'function' ? style(props) : style;
  }

  return undefined;
};

/**
 * For use within `styled(...)` to filter props passed to components that don't know
 * what to do with them (e.g. Link, Icon)
 * @param {Component} Component
 * @param {array} filteredProps
 */
export const filterProps = (Component, filteredProps = []) => props => {
  const allowedProps = {};

  // eslint-disable-next-line prefer-const
  for (let prop in props) {
    if (!filteredProps.includes(prop)) {
      allowedProps[prop] = props[prop];
    }
  }

  return <Component {...allowedProps} />;
};

/**
 * Create a higher order component from a given component.
 * @param {React.Component} Container
 * @returns {(Component: React.Component) => (props: object) => object}
 */
export const makeHoC = Container => Component => {
  const WrappedComponent = props => (
    <Container {...props} Component={Component} />
  );

  if (Component.preserveStatic) {
    Component.preserveStatic.forEach(key => {
      WrappedComponent[key] = Component[key];
    });
  }

  return WrappedComponent;
};
