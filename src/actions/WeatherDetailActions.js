export const FETCH_WEATHER_DETAIL_REQUEST = 'FETCH_WEATHER_DETAIL_REQUEST';
export const FETCH_WEATHER_DETAIL_SUCCESS = 'FETCH_WEATHER_DETAIL_SUCCESS';
export const FETCH_WEATHER_DETAIL_ERROR = 'FETCH_WEATHER_DETAIL_ERROR';

function requestWeatherDetail() {
  return {
    type: FETCH_WEATHER_DETAIL_REQUEST,
  };
}

function requestWeatherDetailError(error) {
  return {
    type: FETCH_WEATHER_DETAIL_ERROR,
    error: error,
  };
}

function receiveWeatherDetail(payload) {
  return {
    type: FETCH_WEATHER_DETAIL_SUCCESS,
    payload: payload,
  };
}

export const fetchWeatherDetail = (latitude, longitude) => {
  return async dispatch => {
    dispatch(requestWeatherDetail());
    try {
      const response = await fetch(`https://api.weather.com/v2/turbo/vt1observation?apiKey=d522aa97197fd864d36b418f39ebb323&format=json&geocode=${latitude}%2C${longitude}&language=en-US&units=e`);
      const data = await response.json();
      dispatch(receiveWeatherDetail(data));
    } catch (error) {
      dispatch(requestWeatherDetailError(error));
    }
  };
};

export default fetchWeatherDetail;
