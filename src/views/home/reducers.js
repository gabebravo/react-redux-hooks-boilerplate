import { createAction, handleActions } from 'redux-actions';

const defaultState = {
  pageCount: 0
};

// ACTIONS
export const incHome = createAction('INC_HOME');
export const decHome = createAction('DEC_HOME');

// REDUCERS
export default handleActions(
  {
    [incHome]: (state, { payload }) => ({
      pageCount: state.pageCount + 1
    }),
    [decHome]: (state, { payload }) => ({
      pageCount: state.pageCount - 1
    })
  },
  defaultState
);
