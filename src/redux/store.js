import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import home from '../views/home/reducer';
import page1 from '../views/page1/reducer';
import page2 from '../views/page2/reducer';
import page3 from '../views/page3/reducers';

const rootReducer = combineReducers({
  home,
  page1,
  page2,
  page3
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
