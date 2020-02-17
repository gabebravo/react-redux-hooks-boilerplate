import React from 'react';
export const Page1Context = React.createContext(0);

const page1Reducer = (state, action) => {
  switch (action.type) {
    case 'INC_PAGE1':
      return state + 1;
    case 'DEC_PAGE1':
      return state - 1;
    default:
      return state;
  }
};

export default function Page1Provider({ children }) {
  const initialState = React.useContext(Page1Context);
  const [state, dispatch] = React.useReducer(page1Reducer, initialState);

  return (
    <Page1Context.Provider value={{ state, dispatch }}>
      {children}
    </Page1Context.Provider>
  );
}
