import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  let history = useHistory();

  return (
    <div>
      <button className="button button-clear" onClick={() => history.push('/')}>
        Home
      </button>
      <button
        className="button button-clear"
        onClick={() => history.push('/page1')}
      >
        Page1
      </button>
      <button
        className="button button-clear"
        onClick={() => history.push('/page2')}
      >
        Page2
      </button>
      <button
        className="button button-clear"
        onClick={() => history.push('/page3')}
      >
        Page3
      </button>
    </div>
  );
}
