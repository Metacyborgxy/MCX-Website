import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { disconnectWallet } from '../../config';

export default class WalletDisconnect extends Component {
    handleWalletDisconnect(e){
        e.preventDefault();
        disconnectWallet();
    }
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                {this.props.account.substr(0, 15)}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href="/#" onClick={(e) =>{this.handleWalletDisconnect(e)}}>Disconnect</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
