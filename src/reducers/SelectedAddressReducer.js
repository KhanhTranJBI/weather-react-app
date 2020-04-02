import { CLICK_ADDRESS } from './../actions/SelectedAddressActions';

const initialState = {
  value: '',
};

const SelectedAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ADDRESS:
      return { ...state, value: action.address };
    default:
      return state;
  }
};

export default SelectedAddressReducer;
