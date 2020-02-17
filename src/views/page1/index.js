import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { incPage1, decPage1 } from './reducers';

export default function Page1() {
  const { pageCount } = useSelector(store => store.page1);
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          {boxes.map((box, index) => (
            <Counter
              key={`page1-${index}`}
              incHandler={incPage1}
              decHandler={decPage1}
              pageCount={pageCount}
              boxNumber={box}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
