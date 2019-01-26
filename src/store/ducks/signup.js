/**
 * Types
 */
export const Types = {
  REQUEST: 'signup/REQUEST',
  SUCCESS: 'signup/SUCCESS',
  FAILURE: 'signup/FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  error: null,
  data: []
};

export default function signup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    }
    case Types.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}


/**
 * Actions
 */
export const Creators = {
  signUpRequest: (user, history) => ({
    type: Types.REQUEST,
    payload: {
      user,
      history
    }
  }),

  signUpSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data }
  }),

  signUpFailure: error => ({
    type: Types.FAILURE,
    payload: { error }
  }),
};
