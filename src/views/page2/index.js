import React from 'react';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { incPage2, decPage2, resetPage2 } from './reducers';

export default function Page2() {
  const { pageCount } = useSelector(store => store.page2);
  const dispatch = useDispatch();
  React.useEffect(() => {
    return () => dispatch(resetPage2());
  }, [dispatch]);
  return (
    <div className="theme-picker container">
      <div>
        <div className="counter-container row">
          {boxes.map((box, index) => (
            <Counter
              key={`page2-${index}`}
              incHandler={() => dispatch(incPage2())}
              decHandler={() => dispatch(decPage2())}
              pageCount={pageCount}
              boxNumber={box}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
