import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Accordion, Card } from "react-bootstrap";
import styled from 'styled-components';
import "../App.css";
  
const Tabs = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Container>
        <Card>
          <div className="accordionholder">
            <Accordion.Toggle eventKey="0" className="desc">
              <h5>Product Description</h5>
            </Accordion.Toggle>
            <Accordion.Toggle eventKey="1" className="review1">
              <h5>Reviews</h5>
            </Accordion.Toggle>
          </div>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ background: "#fdfeff" }}>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle eventKey="1" className="review">
            <h5>Reviews</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body style={{ background: "#9bc9e0" }}>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Container>
    </Accordion>
  );
}

export default Tabs;

const Container = styled.div`
  margin: 10px auto;
  display: block;
  width: 80%;
  padding: 30px;

`;
