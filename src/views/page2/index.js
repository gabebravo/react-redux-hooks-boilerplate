import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { incPage2, decPage2 } from './reducers';

export default function Page2() {
  const { pageCount } = useSelector(store => store.page2);
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          {boxes.map((box, index) => (
            <Counter
              key={`page2-${index}`}
              incHandler={incPage2}
              decHandler={decPage2}
              pageCount={pageCount}
              boxNumber={box}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
