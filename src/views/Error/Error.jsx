import React from 'react';
import './Error.scss';
import { Container, Card, CardBody, CardTitle, Button } from 'shards-react';
import { Link } from 'react-router-dom';

function Error() {
  return <Container fluid>
    <Card>

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
