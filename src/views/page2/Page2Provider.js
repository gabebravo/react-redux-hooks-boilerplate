import React from 'react';
export const Page2Context = React.createContext(0);

const page2Reducer = (state, action) => {
  switch (action.type) {
    case 'INC_PAGE2':
      return state + 1;
    case 'DEC_PAGE2':
      return state - 1;
    default:
      return state;
  }
};

export default function Page2Provider({ children }) {
  const initialState = React.useContext(Page2Context);
  const [state, dispatch] = React.useReducer(page2Reducer, initialState);

  return (
    <Page2Context.Provider value={{ state, dispatch }}>
      {children}
    </Page2Context.Provider>
  );
}
