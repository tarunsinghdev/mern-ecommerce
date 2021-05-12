import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; eMart | Built by{' '}
            <a
              href="https://tarunsingh.surge.sh/"
              target="_blank"
              rel="noreferrer"
            >
              Tarun Singh
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
