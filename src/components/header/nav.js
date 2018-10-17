import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import Auth from '../auth';
import './nav.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuth: false,
      type: 'signup',
      auth: state.auth,
    };
  }
  
  showModal = (e) => {
    this.setState({
      showAuth: true,
      type: e.target.value,
    });
  }

  hideModal = () => {
    this.setState({
      showAuth: false,
    });
  }
  
  componentDidUpdate(){
    console.log(this.state);
  }

  render() {
    return (
      <header className="nav">
        <nav>
          { auth ?
            <Link to='/'><h1>Battle Ship Delta</h1></Link>
            <Link to='/dashboard'>Dashboard</Link> { }
            <Link to='/creategame'>Create Game</Link> { }
            <button className='signout' value='signout'>Sign Out</button>
            <button className='signin' value='signin' onClick={this.showModal}>Sign In Here</button>
            { }
            <button className='signup' value='signup' onClick={this.showModal}>Sign Up Here</button>
            <Modal title='Authentification' show={this.state.showAuth} handleClose={this.hideModal}>
              <Auth type={this.state.type} />
              <button className='cancel' onClick={this.hideModal}>Cancel</button>
            </Modal>
          }
        </nav>
      </header>
    );
  }
}