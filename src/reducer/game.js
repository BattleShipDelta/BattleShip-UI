import * as actions from '../actions/game-actions';
export default (state = null, action) =>{
  const {type, payload} = action;
  switch(type){
    case actions.GAME_UPDATE:
      return payload;
    default:
      return state;
  }
};