import superagent from 'superagent';
export const TOKEN_SET = 'TOKEN_SET';
export const TOKEN_DELETE = 'TOKEN_DELETE';
const API_URI = 'http://localhost:5000';
export const tokenSet = token =>({
  type: TOKEN_SET,
  payload: token,
});

export const tokenDelete = () =>({
  type: TOKEN_DELETE,
});

export const signUpReq = user => dispatch => {
  superagent.post(`${API_URI}/signup`)
    .send({username: user.username, password: user.password})
    .then(res =>{
      dispatch(tokenSet(res.body.token));
      return res;
    });
};

export const signInReq = user => dispatch =>{
  superagent.get(`${API_URI}/login`)
    .auth(user.username, user.password)
    .then(res =>{
      dispatch(tokenSet(res.body.token));
      return res;
    });
};

export const signOutReq = redirect => dispatch =>{
  dispatch(tokenDelete());
  redirect();
};