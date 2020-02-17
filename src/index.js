import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// default state
const DEFAULT_STATE = { theme: 'light' };

/// _____ GLOBAL CONTEXT FOR REDUCER ____________________
export const GlobalContext = React.createContext(DEFAULT_STATE);

/// __________________ GLOBAL REDUCER ____________________
export function globalReducer(state, action) {
  const { type } = action;

  switch (type) {
    case 'TOGGLE':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

// root state wrapper will provide context for all children to access the global reducer
function GlobalWrapper({ children }) {
  const initialState = React.useContext(GlobalContext); // initialize context
  const [state, dispatch] = React.useReducer(globalReducer, initialState); // use context as the state for the reducer instance

  return (
    // wrapper component
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

ReactDOM.render(
  <GlobalWrapper>
    <App />
  </GlobalWrapper>,
  document.getElementById('root')
);
