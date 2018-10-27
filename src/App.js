import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './components/sidebar/Sidebar';
import MainPage from './components/layout/MainPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container id="container">
          <Row>
            <Col sm="auto">
              <Sidebar />
            </Col>
            <Col>
              <MainPage />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
