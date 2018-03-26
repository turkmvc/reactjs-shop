import React, { Component } from 'react';
import '../App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import data from '../Api/data';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
class Home extends Component {
  render() {

    const basketItems = JSON.parse(localStorage.getItem('basketItems'));
    return (
      <div className="App">
        <Header />
        <div>
          Basket
          </div>
        <table>
          <tbody>
<tr><th>name </th><th> qty </th> </tr>
            {basketItems.map(item => (
              <tr>
              <td>{item.name}</td>
                <td>{item.qty}</td>
              </tr>
            ))
            }
          </tbody>
          </table>

            <Footer />
      </div>
          );
        }
      }
      
      export default Home;
