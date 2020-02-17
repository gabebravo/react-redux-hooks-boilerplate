import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { incHome, decHome } from './reducer';

export default function Home() {
  const { count } = useSelector(store => store.home);
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          <HomeProvider>
            {boxes.map((box, index) => (
              <Counter
                key={`home-${index}`}
                incHandler={incHome}
                decHandler={decHome}
                currCount={count}
                boxNumber={box}
              />
            ))}
          </HomeProvider>
        </div>
      </div>
    </div>
  );
}
