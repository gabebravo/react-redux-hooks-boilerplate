import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import home from '../views/home/reducers';
import page1 from '../views/page1/reducers';
import page2 from '../views/page2/reducers';
import page3 from '../views/page3/reducers';
import global from '../components/ThemePicker/reducers';

const rootReducer = combineReducers({
  home,
  page1,
  page2,
  page3,
  global
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
