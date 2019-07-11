import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Paper = ({ children }) => <div>{children}</div>;

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func,
  ]).isRequired,
};

export default memo(Paper);
