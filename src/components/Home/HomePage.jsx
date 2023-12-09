import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar'; // Import your navigation bar component
import DetailedForecast from '../DetailedForcast/DetailedForcast'; // Import a component to display detailed forecast
//import WeeklyForecast from './WeeklyForecast'; // Import a component to display weekly forecast
//import TwoWeeksForecast from './TwoWeeksForecast'; // Import a component to display two weeks forecast
//import Map from './Map'; // Import a component for the interactive map

function HomePage() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={8} md={12}>
            <DetailedForecast />
           
          </Col>
          <Col lg={4} md={12}>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
