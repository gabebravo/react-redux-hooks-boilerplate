import React from 'react';
export const Page3Context = React.createContext(0);

const page3Reducer = (state, action) => {
  switch (action.type) {
    case 'INC_PAGE3':
      return state + 1;
    case 'DEC_PAGE3':
      return state - 1;
    default:
      return state;
  }
};

export default function Page3Provider({ children }) {
  const initialState = React.useContext(Page3Context);
  const [state, dispatch] = React.useReducer(page3Reducer, initialState);

  return (
    <Page3Context.Provider value={{ state, dispatch }}>
      {children}
    </Page3Context.Provider>
  );
}
