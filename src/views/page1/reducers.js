import { createAction, handleActions } from 'redux-actions';

const defaultState = {
  pageCount: 0
};

// ACTIONS
export const incPage1 = createAction('INC_PAGE1');
export const decPage1 = createAction('DEC_PAGE1');
export const resetPage1 = createAction('RESET_PAGE1');

// REDUCERS
export default handleActions(
  {
    [incPage1]: (state, { payload }) => ({
      pageCount: state.pageCount + 1
    }),
    [decPage1]: (state, { payload }) => ({
      pageCount: state.pageCount - 1
    }),
    [resetPage1]: (state, { payload }) => defaultState
  },
  defaultState
);
