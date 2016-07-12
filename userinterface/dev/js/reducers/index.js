import { combineReducers } from 'redux';

import PlayerReducer from './reducer-players';

const allReducers = combineReducers({
  players: PlayerReducer
});

export default allReducers;
