import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/auth-actions';
import AuthForm from './auth-form';
import { withRouter } from 'react-router-dom';
import './auth.css';

class Auth extends React.Component{
  render(){
    const type = this.props.type || (this.props.match && this.props.match.params.type);

    if(type === 'signout'){
      this.props.signoutHandler(() => this.props.history.push('/'));
      return null;
    }
    const handleComplete = this.props[type + 'Handler'];
    if (!handleComplete) {
      throw new Error(`Unexpected Auth type ${type}`);
    }
    
    return(
      <React.Fragment>
        <h2 className='title'>{type === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
        <AuthForm onComplete={handleComplete} 
          submitText={type === 'signup' ? 'Sign Up' : 'Sign In'}
          redirect = {()=> this.props.history.push('/')}
        />
      </React.Fragment>
     
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  signinHandler: user => dispatch(actions.signInReq(user)),
  signupHandler: user => dispatch(actions.signUpReq(user)),
  signoutHandler: redirect => dispatch(actions.signOutReq(redirect)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth)); 
