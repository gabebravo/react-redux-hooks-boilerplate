import React from 'react';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { incPage1, decPage1, resetPage1 } from './reducers';

export default function Page1() {
  const { pageCount } = useSelector(store => store.page1);
  const dispatch = useDispatch();
  React.useEffect(() => {
    return () => dispatch(resetPage1());
  }, [dispatch]);
  return (
    <div className="theme-picker container">
      <div>
        <div className="counter-container row">
          {boxes.map((box, index) => (
            <Counter
              key={`page1-${index}`}
              incHandler={() => dispatch(incPage1())}
              decHandler={() => dispatch(decPage1())}
              pageCount={pageCount}
              boxNumber={box}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
