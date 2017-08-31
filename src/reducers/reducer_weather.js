import _ from 'lodash';
import { FETCH_WEATHER } from '../actions';


export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_WEATHER:
      return  action.payload.data
    break;

    default:
      return state;
    break;
  }
  return state;
}
