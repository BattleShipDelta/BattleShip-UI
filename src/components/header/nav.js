import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import Modal from './modal';
import Auth from '../auth';
import './nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuth: false,
      type: 'signup',
    };
  }
  showModal = (e) => {
    this.setState({
      showAuth: true,
      type: e.target.value,
    });
  };

  hideModal = () => {
    this.setState({
      showAuth: false,
    });
  };

  signoutClick = () => {
    this.hideModal();
    this.props.signoutHandler(() => this.props.history.push('/'));
  }

  render() {
    return (
      <header className="nav">
        {this.props.auth ? 
          <div>
            <nav className='loggedin'>
              <Link to='/'><h1 className='auth'>BattleShip Delta</h1></Link>
              <div className='link'>
                <Link to='/dashboard'>Dashboard</Link> { }
                <Link to='/creategame'>Create Game</Link>
              </div>
              <div  className='signout'>
                <button onClick={this.signoutClick}>sign out</button>
              </div>
            </nav>
          </div>
          :
          <div>
            <nav>
              <Link to='/'><h1>BattleShip Delta</h1></Link>
              <div className='authentication'>
                <button className='signin' value='signin' onClick={this.showModal}>Sign In Here</button>
                <button className='signup' value='signup' onClick={this.showModal}>Sign Up Here</button>
              </div>
              <Modal title='Authentification' show={this.state.showAuth} handleClose={this.hideModal}>
                <Auth type={this.state.type} />
                <button className='cancel' onClick={this.hideModal}>Cancel</button>
              </Modal>
            </nav>
          </div>
        }
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signoutHandler: redirect => dispatch(actions.signOutReq(redirect)),
});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(Nav));
