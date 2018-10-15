import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/auth-actions';
import AuthForm from './auth-form';

class Auth extends React.Component{
  render(){
    const type = this.props.match.params.type;
    if(type === 'signout'){
      this.props.signoutHandler(() => this.props.history.push('/'));
      return null;
    }
    const handleComplete = this.props[type + 'Handler'];
    return(
      <AuthForm onComplete={handleComplete} 
        submitText={type === 'signup' ? 'Sign Up' : 'Sign In'}
        redirect = {()=> this.props.history.push('/')}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);