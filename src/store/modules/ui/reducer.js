// @flow
import { initialState, UIStoreState } from './state';
import { UI_TOGGLE_SIDEBAR } from './types';

export interface ToggleSidebarActions {
  type: typeof UI_TOGGLE_SIDEBAR;
}

// Reducer
export const reducer = (state: UIStoreState = initialState, action: ToggleSidebarActions): UIStoreState => {
  switch (action.type) {
    case UI_TOGGLE_SIDEBAR:
      return Object.assign({}, state, { isSidebarVisible: !state.isSidebarVisible });
    default:
      return state;
  }
};
