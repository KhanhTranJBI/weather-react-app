import { combineReducers } from 'redux';
import SearchSuggestionsReducer from "./SearchSuggestionsReducer";
import WeatherDetailReducer from "./WeatherDetailReducer";
import SelectedAddressReducer from "./SelectedAddressReducer";

export default combineReducers({
  searchSuggestions: SearchSuggestionsReducer,
  weatherDetail: WeatherDetailReducer,
  selectedAddress: SelectedAddressReducer,
});
