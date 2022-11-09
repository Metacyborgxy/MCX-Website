import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import MetamaskIcon from '../../assets/img/icons/metamask.png';
import HTMLReactParser from 'html-react-parser';

export default class CustomModal extends Component {
  render() {
    return (
        <Modal show={this.props.toggler} onHide={this.props.callback}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={MetamaskIcon} alt="icon" />
                <p>{HTMLReactParser(this.props.message)}</p>
            </Modal.Body>
        </Modal>
    )
  }
}
