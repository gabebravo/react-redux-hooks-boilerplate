import React from 'react';
import { useLocation } from 'react-router-dom';
import { transformPathName } from '../utils';

export default function ThemePicker({ theme, handler }) {
  let location = useLocation();
  return (
    <div className="theme-picker">
      <div>
        <h3 style={{ textTransform: 'capitalize' }}>{`${transformPathName(
          location.pathname
        )}`}</h3>
        <h5>{`Theme color is: ${theme}`}</h5>
        <button onClick={handler}>Toggle Theme</button>
      </div>
    </div>
  );
}
