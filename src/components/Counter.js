import React from 'react';
import { useLocation } from 'react-router-dom';
import { transformPathName, getContext } from '../utils';

const counterStyles = {
  textAlign: 'center',
  border: 'solid 2px pink',
  borderRadius: '1rem',
  padding: '5rem',
  margin: '0.5rem'
};

export default function Counter({ incType, DecType, boxNumber }) {
  const location = useLocation();
  const pageName = transformPathName(location.pathname);
  const [count, setCount] = React.useState(0);
  const { state, dispatch } = React.useContext(getContext(location.pathname));
  return (
    <div style={counterStyles} className="column column-33">
      <h4>{`${pageName} Count: ${state}`}</h4>
      <button
        className="button button-outline green"
        onClick={() => dispatch({ type: incType })}
      >
        {`Increment ${pageName} Count`}
      </button>
      <button
        className="button button-outline red"
        onClick={() => dispatch({ type: DecType })}
      >
        {`Decrement ${pageName} Count`}
      </button>
      <h4>{`Box${boxNumber} Count: ${count}`}</h4>
      <button
        className="button button-outline green"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        {`Increment Box${boxNumber} Count`}
      </button>
      <button
        className="button button-outline red"
        onClick={() => setCount(prevCount => prevCount - 1)}
      >
        {`Decrement Box${boxNumber} Count`}
      </button>
    </div>
  );
}
