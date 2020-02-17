import React from 'react';
export const HomeContext = React.createContext(0);

const homeReducer = (state, action) => {
  switch (action.type) {
    case 'INC_HOME':
      return state + 1;
    case 'DEC_HOME':
      return state - 1;
    default:
      return state;
  }
};

export default function HomeProvider({ children }) {
  const initialState = React.useContext(HomeContext);
  const [state, dispatch] = React.useReducer(homeReducer, initialState);

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
}
