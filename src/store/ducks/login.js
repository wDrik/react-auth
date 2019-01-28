/**
 * Types
 */
export const Types = {
  REQUEST: 'login/REQUEST',
  SUCCESS: 'login/SUCCESS',
  FAILURE: 'login/FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  error: null,
  data: []
};

export default function login(state = INITIAL_STATE, action) {
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
  loginRequest: (user, history) => ({
    type: Types.REQUEST,
    payload: {
      user,
      history
    }
  }),

  loginSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data }
  }),

  loginFailure: error => ({
    type: Types.FAILURE,
    payload: { error }
  }),
};
