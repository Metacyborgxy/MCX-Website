import React, { Component } from 'react';
import { isMetaMaskInstalled } from '../../config';
import MetamaskIcon from '../../assets/img/icons/metamask.png';
import WalletDisconnect from './WalletDisconnect';
import CustomModal from '../modals/CustomModal';

export default class WalletButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal:false,
    }
  }

  handleWalletConnect(e){
    e.preventDefault();
    if(!isMetaMaskInstalled()){
      this.setState({ modal: !this.state.modal })
    }else{
      this.props.handleWalletConnect();
    }
  }

  closeModal(){
    this.setState({ modal: false })
  }

  render() {
    
    return (
      <React.Fragment>
          <div className="header__button">
              {
                this.props.account ? <WalletDisconnect account={this.props.account}/> :
                <a onClick={(e) => this.handleWalletConnect(e)} href="/#" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img src={MetamaskIcon} alt="icon" />Connect Wallet</a>
              }
          </div>
          <CustomModal toggler={this.state.modal} callback={() => this.closeModal()} title='Metamask Extension Missing' message='Please install <a href="https://metamask.io/download/" target="_blank" rel="noreferrer">metamask</a> extension first!'/>
      </React.Fragment>
    )
  }
}
