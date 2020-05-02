import React from 'react';
import './Error.scss';
import { Container, Card, CardBody, CardTitle, Button, CardImg } from 'shards-react';
import { Link } from 'react-router-dom';

function Error() {
  return <Container fluid>
    <Card className="error-card">
      <CardImg className="error-card-img" top src="assets/img/raychan-PY3d9NScUP4-unsplash.jpg" alt="Sad cat" />

      <CardBody>
        <CardTitle>Page not found </CardTitle>
        <p>Could not find anything at {window.location.href}.</p>

        <div className="btn-container">
          <Link to="/">
            <Button>Home</Button>
          </Link>

          <Button theme="light" onClick={() => window.history.back()}>Go back</Button>
        </div>
      </CardBody>
    </Card>
  </Container>;
}

export default Error;
