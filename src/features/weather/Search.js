import React, {useEffect, useRef, useState} from "react";
import styles from "./Search.module.css";
import {connect} from "react-redux";
import fetchSearchSuggestion from "../../actions/SearchSuggestionActions";
import fetchWeatherDetail from "../../actions/WeatherDetailActions";
import {clickAddressAction} from "../../actions/SelectedAddressActions";

const Search = props => {
  const {searchSuggestions, fetchSearchSuggestion, fetchWeatherDetail, selectedAddress, clickAddressAction} = props;
  const [showSuggestion, setShowSuggestion] = useState(false);
  const inputRef = useRef();
  const [searchString, setSearchString] = useState('');
  
  const handleSearchClick = () => {
    setShowSuggestion(true);
  };
  
  const handleAutocompleteBlur = (event) => {
    setTimeout(() => {
      setShowSuggestion(false);
    }, 200);
  };
  
  useEffect(() => {
    setTimeout(() => {
      if (searchString === inputRef.current.value) {
        fetchSearchSuggestion(searchString);
        setShowSuggestion(true);
      }
    }, 500);
  }, [searchString, fetchSearchSuggestion]);
  
  const handleSuggestionClick = async (event) => {
    const latitude = event.target.dataset.latitude;
    const longitude = event.target.dataset.longitude;
  
    clickAddressAction(event.target.textContent);
    setShowSuggestion(false);
    fetchWeatherDetail(latitude, longitude);
  };
  
  return (
    <>
      <div className={styles.autocomplete} onBlur={handleAutocompleteBlur}>
        <input ref={inputRef} onClick={handleSearchClick} className={styles.search_input} onChange={event => setSearchString(event.target.value)} type="text" placeholder="Search city or zip code" />
        <div className={styles.autocomplete_items}>
          {showSuggestion && searchSuggestions && searchSuggestions.data && searchSuggestions.data.location && searchSuggestions.data.location.address && (
            searchSuggestions.data.location.address.map((address, i) => {
              return <div onClick={handleSuggestionClick} key={searchSuggestions.data.location.placeId[i]} data-latitude={searchSuggestions.data.location.latitude[i]} data-longitude={searchSuggestions.data.location.longitude[i]} className={address === selectedAddress.value ? `${styles.selected_item}` : styles.item}>{address}</div>
            })
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    searchSuggestions: state.searchSuggestions,
    selectedAddress: state.selectedAddress,
  };
};

const mapDispatchToProps = {
  fetchSearchSuggestion,
  fetchWeatherDetail,
  clickAddressAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
