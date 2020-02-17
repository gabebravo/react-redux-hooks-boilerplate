import { createAction, handleActions } from 'redux-actions';

const defaultState = {
  pageCount: 0
};

// ACTIONS
export const incPage2 = createAction('INC_PAGE2');
export const decPage2 = createAction('DEC_PAGE2');
export const resetPage2 = createAction('RESET_PAGE2');

// REDUCERS
export default handleActions(
  {
    [incPage2]: (state, { payload }) => ({
      pageCount: state.pageCount + 1
    }),
    [decPage2]: (state, { payload }) => ({
      pageCount: state.pageCount - 1
    }),
    [resetPage2]: (state, { payload }) => defaultState
  },
  defaultState
);
