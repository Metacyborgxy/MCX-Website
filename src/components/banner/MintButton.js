import React, { Component } from 'react';
import { isWalletConnected } from '../../config';
import { mint } from '../../lib/web3mint';
import CustomModal from '../modals/CustomModal';

export default class MintButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      success:false,
    }
  }

  handleModal(){
    this.setState({modal:!this.state.modal});
  }

  handleSuccessModal(){
    this.setState({success:!this.state.success});
  }

  async handleMint(e){
    e.preventDefault();
    if(isWalletConnected()){
      const txnHash = await mint(1);
      if(txnHash){
        this.handleSuccessModal();
      }
    }else{
      this.handleModal();
    }
  }
  render() {
    return (
        <React.Fragment>
          <a href="/#" className="btn btn__two" onClick={(e) => this.handleMint(e) }>MINT</a>
          <CustomModal toggler={this.state.modal} title='Wallet Is Not Connected' callback={ () => this.handleModal()} message='Please connect your wallet!'/>
          <CustomModal toggler={this.state.success} title='Mint successfull' callback={ () => this.handleSuccessModal()} message='Your mint is successfull check your wallet!'/>
        </React.Fragment>
    )
  }
}
