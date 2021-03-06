/**
 * Types
 */
export const Types = {
  REQUEST: 'favorites/REQUEST',
  SUCCESS: 'favorites/SUCCESS',
  FAILURE: 'favorites/FAILURE',
};


/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
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
  addFavoriteRequest: repository => ({
    type: Types.REQUEST,
    payload: { repository }
  }),

  addFavoriteSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data }
  }),

  addFavoriteFailure: error => ({
    type: Types.FAILURE,
    payload: { error }
  }),
};
