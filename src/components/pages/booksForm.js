"use strict"
import React from 'react';
import {
  MenuItem, 
  InputGroup, 
  DropdownButton, 
  Col, 
  Row, 
  Well, 
  Panel, 
  FormControl, 
  FormGroup, 
  ControlLabel, 
  Button
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBooks, deleteBooks, resetButton} from '../../actions';
import axios from 'axios';

class BooksForm extends React.Component{
  constructor() {
    super();
  }
  handleSubmit(){
    const book=[{
      name: findDOMNode(this.refs.name).value,
      email: findDOMNode(this.refs.email).value,
      message:findDOMNode(this.refs.message).value,
      phone: findDOMNode(this.refs.phone).value,
    }]
    this.props.postBooks(book);
  }

  onDelete(){
    let bookId = findDOMNode(this.refs.delete).value;

    this.props.deleteBooks(bookId);
  }


  resetForm(){
    //RESET THE Button
    this.props.resetButton();

    findDOMNode(this.refs.name).value = '';
    findDOMNode(this.refs.email).value = '';
    findDOMNode(this.refs.message).value = '';
    findDOMNode(this.refs.phone).value = '';
  }
  render(){

    return(
      <Well>
        <Row>
          <Col xs={12} sm={6}>
            <Panel>
              <FormGroup controlId="name" validationState={this.props.validation}>
                <ControlLabel>Name</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Name"
                    ref="name" />
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="email" validationState={this.props.validation}>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Email"
                    ref="email" />
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="message" validationState={this.props.validation}>
                <ControlLabel>Message</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Message"
                    ref="message" />
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="phone" validationState={this.props.validation}>
                <ControlLabel>Phone</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Phone"
                    ref="phone" />
                    <FormControl.Feedback/>
              </FormGroup>
              <Button
                onClick={(!this.props.msg)?(this.handleSubmit.bind(this)):(this.resetForm.bind(this))}
                bsStyle={(!this.props.style)?("primary"):(this.props.style)}>
                {(!this.props.msg)?("Save book"):(this.props.msg)}
              </Button>
            </Panel>
          </Col>
        </Row>

      </Well>
    )
  }
}
function mapStateToProps({ books }){
  return {
    books: books.books,
    msg: books.msg,
    style: books.style,
    validation: books.validation
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postBooks,
    resetButton
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
