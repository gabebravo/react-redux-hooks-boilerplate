import { createAction, handleActions } from 'redux-actions';

const defaultState = {
  theme: 'light'
};

export const toggleTheme = createAction('TOGGLE_THEME');

export default handleActions(
  {
    [toggleTheme]: (state, { payload }) => ({
      theme: state.theme === 'light' ? 'dark' : 'light'
    })
  },
  defaultState
);
