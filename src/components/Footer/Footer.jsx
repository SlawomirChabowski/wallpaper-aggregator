import React from 'react';
import './Footer.scss';

function Footer() {
  return <footer className="site-footer">
    Copyright &copy; {new Date().getFullYear()} by Sławomir Chabowski
  </footer>;
}

export default Footer;
