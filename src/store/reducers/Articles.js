import * as actionTypes from '../actions/actionTypes';

const initialState = {
  articles: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        loading: false
      };
    case actionTypes.FETCH_ARTICLES_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
