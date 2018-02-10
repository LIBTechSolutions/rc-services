"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Carousel, Grid, Col, Row, Button} from 'react-bootstrap';

import BooksForm from './booksForm';


class BooksList extends React.Component{
  
  render(){

    console.log("HOW STATE LOOKS LIKE", this.props.state);
    console.log("HOW STATE.BOOKS LOOKS LIKE", this.props.stateBooks);
    console.log("HOW STATE.BOOKS.BOOKS LOOKS LIKE", this.props.stateBooksBooks);

    return(
        <Grid>
          <Row>
            <Carousel>
              <Carousel.Item>
                <img width={900} height={300} alt="900x300" src="/images/home1.jpg"/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={300} alt="900x300" src="/images/home2.jpg"/>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row style={{marginTop:'15px'}}>
              <BooksForm />
          </Row>
        </Grid>
    )
  }
}

export default BooksList;
