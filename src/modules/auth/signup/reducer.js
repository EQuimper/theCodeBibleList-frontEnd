import { REGISTER_USER } from './actions';

const INITIAL_STATE = {
  isFetched: false,
  err: null,
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${REGISTER_USER}_PENDING`:
      return {};
    case `${REGISTER_USER}_FULFILLED`:
      return { ... state,
        isFetched: true,
        user: action.payload
      }
    case `${REGISTER_USER}_REJECTED`:
      return { ...state,
        isFetched: true,
        err: action.payload.message
      }
    default:
      return state;
  }
};
