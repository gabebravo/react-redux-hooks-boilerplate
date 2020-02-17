import React from 'react';
import { useLocation } from 'react-router-dom';
import { transformPathName } from '../../utils';
import { toggleTheme } from './reducers';
import { useDispatch, useSelector } from 'react-redux';

export default function ThemePicker() {
  let location = useLocation();
  const theme = useSelector(state => state.global.theme);
  const dispatch = useDispatch();
  return (
    <div className="theme-picker">
      <div>
        <h3 style={{ textTransform: 'capitalize' }}>{`${transformPathName(
          location.pathname
        )}`}</h3>
        <h5>{`Theme color is: ${theme}`}</h5>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      </div>
    </div>
  );
}
