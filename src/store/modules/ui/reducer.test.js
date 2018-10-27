import { toggleSidebar } from './actions';
import { reducer } from './reducer';
import { initialState } from './state';

describe('store -> UI', () => {
  it('should handle the initial state', () => {
    expect(reducer(initialState, {})).toEqual({ isSidebarVisible: false });
  });
  it('should handle UI_TOGGLE_SIDEBAR', () => {
    expect(reducer(initialState, toggleSidebar())).toEqual({ isSidebarVisible: true });
  });
});
