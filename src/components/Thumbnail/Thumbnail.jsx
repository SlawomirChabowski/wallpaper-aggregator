import React from 'react';
import PropTypes from 'prop-types';
import './Thumbnail.scss';

function Thumbnail(props) {
  return <div className="p-1">
    <a className="d-block overflow-hidden">
      <img src={props.image.imageUrl} className="w-100 thumbnail" alt={props.image.id} />
    </a>
  </div>;
}

Thumbnail.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Thumbnail;
