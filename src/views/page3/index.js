import React from 'react';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { incPage3, decPage3, resetPage3 } from './reducers';

export default function Page3() {
  const { pageCount } = useSelector(store => store.page3);
  const dispatch = useDispatch();
  React.useEffect(() => {
    return () => dispatch(resetPage3());
  }, [dispatch]);
  return (
    <div className="theme-picker container">
      <div>
        <div className="counter-container row">
          {boxes.map((box, index) => (
            <Counter
              key={`page3-${index}`}
              incHandler={incPage3}
              decHandler={decPage3}
              pageCount={pageCount}
              boxNumber={box}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
