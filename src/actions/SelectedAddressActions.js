export const CLICK_ADDRESS = 'CLICK_ADDRESS';

function clickAddress(address) {
  return {
    type: CLICK_ADDRESS,
    address,
  };
}

export const clickAddressAction = (address) => {
  return dispatch => {
    dispatch(clickAddress(address));
  };
};

export default clickAddressAction;
