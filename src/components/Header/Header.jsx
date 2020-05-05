import React from 'react';
import './Header.scss';
import { Container } from 'shards-react';

function Header() {
  return <Container fluid className="p-fixed fixed-top">
    <div className="bg-white shadow p-3 row align-items-center">
      <header className="col-10 col-sm-4 offset-sm-4">
        <a
          href="/"
          className="logo-btn btn btn-text d-flex mx-sm-auto align-items-center px-0"
          style={{ width: 'min-content' }}
        >
          <img className="logo-img d-inline-block" src="assets/img/logo.svg" alt="Logo" />
          <h1 className="ml-2 my-0 h4 d-inline-block">WallX</h1>
        </a>
      </header>

      <div className="col-2 col-sm-4">
        <div style={{ float: 'right' }}>Search icon</div>
      </div>

    </div>
  </Container>;
}

export default Header;
