import React, { Component } from 'react';
import '../App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Price from '../Components/Price';
import data from '../Api/data';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

class Product extends Component {
    constructor({ props, match }) {
        super(props);
        this.id = match.params.id;
    }
    componentWillMount() {
        // Ajax Request
        // localStorage.clear();
        this.product = data.products.filter(a => a.id === this.id)[0];
    }
    handleClick() {
        const basketItems = JSON.parse(localStorage.getItem('basketItems'));
        if (basketItems) {
            // alert('Item already added');
             console.log(basketItems);
            for(let i in basketItems) {

                console.log(i);
                if(basketItems[i].id === this.id) {
                    basketItems[i].qty += 1;
                    localStorage.setItem('basketItems', JSON.stringify(basketItems));
                    break;
                }
            }
            basketItems.push({ id: this.product.id, name: this.product.name, qty: 1 });
            localStorage.setItem('basketItems', JSON.stringify(basketItems));
        }
        else {
            const basketProduct = { id: this.product.id, name: this.product.name, qty: 1 };
            const items = [basketProduct];
            localStorage.setItem('basketItems', JSON.stringify(items));
        }

    }

    render() {
        return (
            <div className="App">
                <Header />
                {this.product &&
                    <div className="row">
                        <div className="col-md-12">

                            <div className="thumbnail" >
                                <h4 className="text-center"><span className="label label-info">Samsung</span></h4>
                                <img src={'/images/products/' + this.product.id + '.jpg'} className="img-responsive" />
                                <div className="caption">
                                    <div className="row">
                                        <div className="col-md-6 col-xs-6">
                                            <h3>{this.product.name}</h3>
                                        </div>
                                        <div className="col-md-6 col-xs-6 price">
                                            <h3>
                                                <label> {this.product.price}</label></h3>
                                        </div>
                                    </div>
                                    {/* <p>32GB, 2GB Ram, 1080HD, 5.1 inches, Android</p> */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <a className="btn btn-primary btn-product"><span className="glyphicon glyphicon-thumbs-up"></span> Like</a>
                                        </div>
                                        <div className="col-md-6">
                                            <button onClick={() => this.handleClick()} className="btn btn-success btn-product">
                                                <span className="glyphicon glyphicon-shopping-cart"></span> افزودن به سبد</button>
                                        </div>
                                    </div>

                                    <p> </p>
                                </div>
                            </div>

                        </div>

                    </div>



                }
                <Footer />
            </div>
        );
    }
}

export default Product;

   // <div>
                    //     Product {this.id}
                    //     <Price product={this.product} /> 
                    // </div>