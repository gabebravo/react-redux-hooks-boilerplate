import React from 'react';
import { useLocation } from 'react-router-dom';
import { transformPathName } from '../utils';
import { useDispatch } from 'react-redux';

const counterStyles = {
  textAlign: 'center',
  border: 'solid 2px pink',
  borderRadius: '1rem',
  padding: '5rem',
  margin: '0.5rem'
};

export default function Counter({
  incHandler,
  decHandler,
  pageCount,
  boxNumber
}) {
  const location = useLocation();
  const pageName = transformPathName(location.pathname);
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();

  return (
    <div style={counterStyles} className="column column-33">
      <h4>{`${pageName} Count: ${pageCount}`}</h4>
      <button
        className="button button-outline green"
        onClick={() => dispatch(incHandler())}
      >
        {`Increment ${pageName} Count`}
      </button>
      <button
        className="button button-outline red"
        onClick={() => dispatch(decHandler())}
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
