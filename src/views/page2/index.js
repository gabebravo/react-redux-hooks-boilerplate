import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { incPage2, decPage2 } from './reducer';

export default function Page2() {
  const { count } = useSelector(store => store.page2);
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          <Page2Provider>
            {boxes.map((box, index) => (
              <Counter
                key={`page2-${index}`}
                incHandler={incPage2}
                decHandler={decPage2}
                currCount={count}
                boxNumber={box}
              />
            ))}
          </Page2Provider>
        </div>
      </div>
    </div>
  );
}
