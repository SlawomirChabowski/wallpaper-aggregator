import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './ViewContainer.scss';

/**
 * @typedef {object} ViewContainerProps
 * @property {ReactNodeLike[]} children
 * @param {object} props 
 */
function ViewContainer(props) {
  return <div className="site-container">
    <div>
      <Header />
      {props.children}
    </div>

    <Footer />
  </div>;
}

ViewContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewContainer;
