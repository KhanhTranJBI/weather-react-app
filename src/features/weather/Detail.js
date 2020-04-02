import React from "react";

const Detail = props => {
  const {selectedAddress, weatherDetail } = props;
  
  return (<div>{selectedAddress && weatherDetail && (
    <div>
      <h3>{selectedAddress}</h3>
      <div>as of {new Date(weatherDetail.observationTime).toTimeString()}</div>
      <div>{weatherDetail.temperature}<sup>°</sup></div>
      <div>{weatherDetail.phrase}</div>
      <div>feels like {weatherDetail.feelsLike}<sup>°</sup></div>
      <div>UV Index {weatherDetail.uvIndex} of 10</div>
    </div>
  )}</div>);
};

export default Detail;
