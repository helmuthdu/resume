import { initialState } from './state';
import { UI_TOGGLE_SIDEBAR } from './types';

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_TOGGLE_SIDEBAR:
      return Object.assign({}, state, { isSidebarVisible: !state.isSidebarVisible });
    default:
      return state;
  }
};
