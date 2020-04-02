import React, {useState} from "react";
import styles from "./Search.module.css";

const Search = props => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [error, setError] = useState('');
  
  const handleSearchClick = () => {
    setShowSuggestion(true);
  };
  
  const handleAutocompleteBlur = (event) => {
    setTimeout(() => {
      setShowSuggestion(false);
    }, 200);
  };
  
  const handleSearchChange = async (event) => {
    const query = event.target.value;
    if (query.length < 3) {
      return;
    }
    try {
      const response = await fetch(`https://api.weather.com/v3/location/search?apiKey=d522aa97197fd864d36b418f39ebb323&format=json&language=en-US&locationType=locale&query=${query}`);
      const data = await response.json();
      
      setSearchSuggestions(data);
      setError('');
    } catch (e) {
      setError('There is an error getting search suggestions');
    }
    setShowSuggestion(true);
  };
  
  const handleSuggestionClick = async (event) => {
    setSelectedAddress(event.target.textContent);
    const latitude = event.target.dataset.latitude;
    const longitude = event.target.dataset.longitude;
    setShowSuggestion(false);
    
    try {
      const response = await fetch(`https://api.weather.com/v2/turbo/vt1observation?apiKey=d522aa97197fd864d36b418f39ebb323&format=json&geocode=${latitude}%2C${longitude}&language=en-US&units=e`);
      const data = await response.json();
      
      setWeatherDetail(data.vt1observation);
      setError('');
    } catch (e) {
      setError(`There is an error getting weather of "${selectedAddress}"`);
    }
  };
  
  const {setSelectedAddress, selectedAddress, setWeatherDetail} = props;
  
  return (
    <>
      <div className={styles.autocomplete} onBlur={handleAutocompleteBlur}>
        <input onClick={handleSearchClick} className={styles.search_input} onChange={handleSearchChange} type="text" placeholder="Search city or zip code" />
        <div className={styles.autocomplete_items}>
          {showSuggestion && searchSuggestions.location && searchSuggestions.location.address && (
            searchSuggestions.location.address.map((address, i) => {
              return <div onClick={handleSuggestionClick} key={searchSuggestions.location.placeId[i]} data-latitude={searchSuggestions.location.latitude[i]} data-longitude={searchSuggestions.location.longitude[i]} className={address === selectedAddress ? `${styles.selected_item}` : styles.item}>{address}</div>
            })
          )}
        </div>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

export default Search;
