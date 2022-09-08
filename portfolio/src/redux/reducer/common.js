import { HEADER_ENABLE } from "../action/action-names";

const initialState = {
  // NavBar Toggle
  toggleStatus: false,
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case HEADER_ENABLE: {
      return {
        ...state,
        toggleStatus: !state.toggleStatus,
      };
    }
    default:
      return state;
  }
};

export default common;
