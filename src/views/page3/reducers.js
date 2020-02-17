import { createAction, handleActions } from 'redux-actions';

const defaultState = {
  pageCount: 0
};

// ACTIONS
export const incPage3 = createAction('INC_PAGE3');
export const decPage3 = createAction('DEC_PAGE3');
export const resetPage3 = createAction('RESET_PAGE3');

// REDUCERS
export default handleActions(
  {
    [incPage3]: (state, { payload }) => ({
      pageCount: state.pageCount + 1
    }),
    [decPage3]: (state, { payload }) => ({
      pageCount: state.pageCount - 1
    }),
    [resetPage3]: (state, { payload }) => defaultState
  },
  defaultState
);
