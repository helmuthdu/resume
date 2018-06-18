import { toggleSidebar } from './actions';
import { uiReducer } from './reducer';
import { initialState } from './state';

describe('store -> UI', () => {
  it('should handle the initial state', () => {
    expect(uiReducer(initialState, {})).toEqual({ isSidebarVisible: false });
  });
  it('should handle UI_TOGGLE_SIDEBAR', () => {
    expect(uiReducer(initialState, toggleSidebar())).toEqual({ isSidebarVisible: true });
  });
});
