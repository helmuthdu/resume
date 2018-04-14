// @flow
import { initialState, UIStoreState } from './state';
import { UI_TOGGLE_SIDEBAR } from './types';

export interface ToggleSidebar {
  type: typeof UI_TOGGLE_SIDEBAR;
}

// Reducer
export const uiReducer = (state: UIStoreState = initialState, action: ToggleSidebar): UIStoreState => {
  switch (action.type) {
    case UI_TOGGLE_SIDEBAR:
      return Object.assign({}, state, { isSidebarVisible: !state.isSidebarVisible });
    default:
      return state;
  }
};