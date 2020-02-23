import { handleActions } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

import { ADD_USER } from './users.actiontypes';

const initialState = {
  'uuid-1': {
    firstname: 'Dmitriy',
    lastname: 'Kondratenko',
    address: 'Akademika Vernadskogo, 21',
    phone: '+30984599929',
    email: 'dmkndrtnk@gmail.com',
  },
  'uuid-2': {
    firstname: 'Dmitriy',
    lastname: 'Kondratenko',
    address: 'Akademika Vernadskogo, 21',
    phone: '+30984599929',
    email: 'dmkndrtnk@gmail.com',
  },
  'uuid-3': {
    firstname: 'Dmitriy',
    lastname: 'Kondratenko',
    address: 'Akademika Vernadskogo, 21',
    phone: '+30984599929',
    email: 'dmkndrtnk@gmail.com',
  },
  'uuid-4': {
    firstname: 'Dmitriy',
    lastname: 'Kondratenko',
    address: 'Akademika Vernadskogo, 21',
    phone: '+30984599929',
    email: 'dmkndrtnk@gmail.com',
  },
};

export default handleActions({
  [ADD_USER]: (state, { payload: user }) => ({
    ...state,
    [uuidv4()]: user,
  }),
}, initialState);
