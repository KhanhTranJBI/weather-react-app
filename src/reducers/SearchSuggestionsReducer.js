import {FETCH_SEARCH_SUGGESTION_REQUEST, FETCH_SEARCH_SUGGESTION_SUCCESS, FETCH_SEARCH_SUGGESTION_ERROR} from './../actions/SearchSuggestionActions';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

const SearchSuggestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_SUGGESTION_REQUEST:
      return { ...state, error: null, isLoading: true };
    case FETCH_SEARCH_SUGGESTION_ERROR:
      return { ...state, error: action.error, isLoading: false };
    case FETCH_SEARCH_SUGGESTION_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default SearchSuggestionsReducer;

