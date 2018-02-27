import {FETCH_WEATHER} from './../actions/index';

export default function(state = [], action){
  console.log(state);
  switch(action.type){
    case FETCH_WEATHER:
      // State should never be mutated.
      // That is why an array is concatinated everytime to the state
      return state.concat([action.payload.data]);

      //--- Or this can also be written as ---
      // return [action.payload.data, ...state];
  }
  return state;
}
