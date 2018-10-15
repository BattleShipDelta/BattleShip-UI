import React from 'react';
export default class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: null,
      passwordError: null,
      error: null,
    };
  }
  handleChange = (e) =>{
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    //[name + 'Error']: validate(name, value),
    });
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await this.props.onComplete(this.state);
      var state = {
        username: '',
        password: '',
        usernameError: null,
        passwordError: null,
        error: null,
      };
      this.setState(state);
      this.props.redirect();
    } catch(error){
      console.error(error);
      this.setState({
        error: error.message || error,
      });
    }
  }

  render(){
    const {error, username, usernameError, password, passwordError} = this.state;
    return(
      <form onSubmit={this.handleSubmit} className='auth'>
        {error && <p className='error'>{error}</p>}
        {usernameError && <label className='error' htmlFor='username'>{usernameError}</label>}
        <input type='text'
          name='username'
          placeholder='username'
          value={username}
          onChange={this.handleChange}/>
        {passwordError && <label className='error' htmlFor='password'>{passwordError}</label>}
        <input type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={this.handleChange}/>
        <button type='submit'>{this.props.submitText}</button> 
      </form>
    );
  }
}