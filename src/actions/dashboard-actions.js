import superagent from 'superagent';
const API_URL = process.env.REACT_APP_API_URL;

export const GAMELIST_SET = 'GAMELIST_SET';

export const gameListSet = (gameList) => ({
  type: GAMELIST_SET, 
  payload: gameList,
});

export const listFetch = () => dispatch => {
  superagent.get(`${API_URL}/api/games`)
    .then(res => {
      dispatch(gameListSet(res.body));
      return res;
    });
};