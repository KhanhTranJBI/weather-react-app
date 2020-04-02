export const FETCH_SEARCH_SUGGESTION_REQUEST = 'FETCH_SEARCH_SUGGESTION_REQUEST';
export const FETCH_SEARCH_SUGGESTION_SUCCESS = 'FETCH_SEARCH_SUGGESTION_SUCCESS';
export const FETCH_SEARCH_SUGGESTION_ERROR = 'FETCH_SEARCH_SUGGESTION_ERROR';

function requestSearchSuggestion() {
  return {
    type: FETCH_SEARCH_SUGGESTION_REQUEST,
  };
}

function requestSearchSuggestionError(error) {
  return {
    type: FETCH_SEARCH_SUGGESTION_ERROR,
    error: error,
  };
}

function receiveSearchSuggestion(payload) {
  return {
    type: FETCH_SEARCH_SUGGESTION_SUCCESS,
    payload: payload,
  };
}

export const fetchSearchSuggestion = (query) => {
  return async dispatch => {
    dispatch(requestSearchSuggestion());
    try {
      const response = await fetch(`https://api.weather.com/v3/location/search?apiKey=d522aa97197fd864d36b418f39ebb323&format=json&language=en-US&locationType=locale&query=${query}`);
      const data = await response.json();
      dispatch(receiveSearchSuggestion(data));
    } catch (error) {
      dispatch(requestSearchSuggestionError(error));
    }
  };
};

export default fetchSearchSuggestion;
