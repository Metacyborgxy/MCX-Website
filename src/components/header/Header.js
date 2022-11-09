import React, { Component } from 'react';
import Logo from './Logo';
import WalletButton from './WalletButton';
import Toast  from 'react-bootstrap/Toast';
import { connectWallet, getChainId } from '../../config';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      account:'',
      toast:false
    }

    this.handleWalletConnect = this.handleWalletConnect.bind(this);
  }

  componentDidMount(){
    if(localStorage.getItem('isWalletConnected') === 'true'){
      this.isRinkeby();
    }
  }

  async handleWalletConnect(){
    const chainId = await getChainId();
    if(chainId === 4){
      const accounts = await connectWallet();
      if(accounts.length){
        this.setState({ account: accounts[0] });
        localStorage.setItem('isWalletConnected', true);
      }
    }else{
      this.setState({toast:true})
    }
  }

  handleToast(){
    this.setState({toast:!this.state.toast})
  }

  async isRinkeby(){
    const chainId = await getChainId();
    if(chainId === 4){
      this.handleWalletConnect();
    }else{
      this.setState({toast:true})
    }
  }

  render() {
    return (
      <React.Fragment>
            {/* ====== HEADER AREA START ====== */}
            <header>
                <div className="menu__area transparent__header">
                    <div className="container">
                        <div className="row">
                          <div className="col-12">
                              <div className="menu__wrap">
                                <nav className="menu__nav">
                                    <Logo/>
                                    <WalletButton account={this.state.account} handleWalletConnect={this.handleWalletConnect} />
                                </nav>
                              </div>
                              <Toast show={this.state.toast} onClose={()=> this.handleToast()}>
                                <Toast.Header>
                                  <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                  />
                                  <strong className="me-auto">Notice</strong>
                                </Toast.Header>
                                <Toast.Body>Please switch the chain to <strong>Rinkeby Test Network!</strong></Toast.Body>
                              </Toast>
                          </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* ====== HEADER AREA END ====== */}
      </React.Fragment>
    );
  }
}

