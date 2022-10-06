import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ tag }) => (
  <p>{tag}</p>
);

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
