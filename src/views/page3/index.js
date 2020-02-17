import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { incPage3, decPage3 } from './reducer';

export default function Page3() {
  const { count } = useSelector(store => store.page3);
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          <Page3Provider>
            {boxes.map((box, index) => (
              <Counter
                key={`page3-${index}`}
                incHandler={incPage3}
                decHandler={decPage3}
                currCount={count}
                boxNumber={box}
              />
            ))}
          </Page3Provider>
        </div>
      </div>
    </div>
  );
}
