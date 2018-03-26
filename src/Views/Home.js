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
        <Grid>
          <Row>
            {
              data.products.map(item => (
                <Col key={item.id} xs={12} md={4}>
                  <div className="thumbnail" >
                    <h4 className="text-center"><span className="label label-info">Samsung</span></h4>
                    <img src={'/images/products/' + item.id + '.jpg'} className="img-responsive" />
                    <div className="caption">
                      <div className="row">
                        <div className="col-md-6 col-xs-6">
                          <h3>{item.name}</h3>
                        </div>
                        <div className="col-md-6 col-xs-6 price">
                          <h3>
                            <label> {item.price}</label></h3>
                        </div>
                      </div>
                      {/* <p>32GB, 2GB Ram, 1080HD, 5.1 inches, Android</p> */}
                      <div className="row">
                        <div className="col-md-6">
                          <a className="btn btn-primary btn-product"><span className="glyphicon glyphicon-thumbs-up"></span> Like</a>
                        </div>
                        <div className="col-md-6">
                          <a href={'/products/' +  item.id} className="btn btn-success btn-product"><span className="glyphicon glyphicon-shopping-cart"></span> Buy</a></div>
                      </div>

                      <p> </p>
                    </div>
                  </div>


                  {/* <Thumbnail src={ '/images/products/' + item.id + '.jpg'} href={'/products/' +  item.id} >
                        {item.name} {item.price}
                        </Thumbnail> */}
                </Col>
              ))
            }
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Home;
