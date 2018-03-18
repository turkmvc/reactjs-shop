import React, { Component } from 'react';
import '../App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import data from '../Api/data';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          Basket
          </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
