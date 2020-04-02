import {FETCH_WEATHER_DETAIL_REQUEST, FETCH_WEATHER_DETAIL_SUCCESS, FETCH_WEATHER_DETAIL_ERROR} from './../actions/WeatherDetailActions';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

const WeatherDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DETAIL_REQUEST:
      return { ...state, error: null, isLoading: true };
    case FETCH_WEATHER_DETAIL_ERROR:
      return { ...state, error: action.error, isLoading: false };
    case FETCH_WEATHER_DETAIL_SUCCESS: {
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

export default WeatherDetailReducer;

