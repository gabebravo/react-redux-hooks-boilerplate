import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { incPage1, decPage1 } from './reducer';

export default function Page1() {
  const { count } = useSelector(store => store.page1);
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          <Page1Provider>
            {boxes.map((box, index) => (
              <Counter
                key={`page1-${index}`}
                incHandler={incPage1}
                decHandler={decPage1}
                currCount={count}
                boxNumber={box}
              />
            ))}
          </Page1Provider>
        </div>
      </div>
    </div>
  );
}
