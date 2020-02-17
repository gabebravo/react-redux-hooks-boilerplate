import React from 'react';
import { useLocation } from 'react-router-dom';
import { transformPathName } from '../utils';

export default function ThemePicker() {
  let location = useLocation();

  // const globalReducer = React.useContext(GlobalContext);
  // const { state, dispatch } = globalReducer;
  return (
    <div className="theme-picker">
      <div>
        <h3 style={{ textTransform: 'capitalize' }}>{`${transformPathName(
          location.pathname
        )}`}</h3>
        {/* <h5>{`Theme color is: ${state.theme}`}</h5> */}
        <h5>{`Theme color is: light`}</h5>
        {/* <button onClick={() => dispatch({ type: 'TOGGLE' })}> */}
        <button onClick={() => console.log('clicked')}>Toggle Theme</button>
      </div>
    </div>
  );
}
