import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/globalReducers';
import NavBar from './components/NavBar';
import ThemePicker from './components/ThemePicker';
import Home from './views/home';
import Page1 from './views/page1';
import Page2 from './views/page2';
import Page3 from './views/page3';
import './App.css';

const NoMatch = () => 'There is nothing to see here';

function App() {
  const theme = useSelector(state => state.global.theme);
  const dispatch = useDispatch();
  return (
    <div style={{ height: '100em' }} className={theme}>
      <Router>
        <NavBar />
        <ThemePicker theme={theme} handler={() => dispatch(toggleTheme())} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
