import React, {useState} from 'react';
import Detail from "./Detail";
import Search from "./Search";

export function Weather() {
  const [weatherDetail, setWeatherDetail] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState('');
  
  return (
    <div>
      <Search setWeatherDetail={setWeatherDetail} setSelectedAddress={setSelectedAddress} selectedAddress={selectedAddress} />
      <Detail selectedAddress={selectedAddress} weatherDetail={weatherDetail} />
    </div>
  );
}
