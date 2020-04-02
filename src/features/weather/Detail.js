import React from "react";
import {connect} from "react-redux";

const Detail = props => {
  const {selectedAddress, weatherDetail} = props;
  
  return (<div>{selectedAddress && selectedAddress.value && weatherDetail && weatherDetail.data && (
    <div>
      <h3>{selectedAddress.value}</h3>
      <div>as of {new Date(weatherDetail.data.vt1observation.observationTime).toTimeString()}</div>
      <div>{weatherDetail.data.vt1observation.temperature}<sup>°</sup></div>
      <div>{weatherDetail.data.vt1observation.phrase}</div>
      <div>feels like {weatherDetail.data.vt1observation.feelsLike}<sup>°</sup></div>
      <div>UV Index {weatherDetail.data.vt1observation.uvIndex} of 10</div>
    </div>
  )}</div>);
};

const mapStateToProps = state => {
  return {
    weatherDetail: state.weatherDetail,
    selectedAddress: state.selectedAddress,
  };
};

export default connect(mapStateToProps)(Detail);
