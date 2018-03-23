// @flow
export interface UIStoreState {
  isSidebarVisible: boolean;
}

// Store
export const initialState: UIStoreState = { isSidebarVisible: false };

// Types
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// Actions
export interface ToggleSidebar {
  type: typeof TOGGLE_SIDEBAR;
}

// Reducer
export const uiReducer = (state: UIStoreState = initialState, action: ToggleSidebar): UIStoreState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, { isSidebarVisible: !state.isSidebarVisible });
    default:
      return state;
  }
};

export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });