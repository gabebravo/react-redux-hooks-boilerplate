import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import HomeProvider, { HomeContext } from './HomeProvider';
import { boxes } from '../../utils/constants';

export default function Home() {
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          <HomeProvider>
            {boxes.map((box, index) => (
              <Counter
                key={`home-${index}`}
                contextType={HomeContext}
                incType="INC_HOME"
                DecType="DEC_HOME"
                boxNumber={box}
              />
            ))}
          </HomeProvider>
        </div>
      </div>
    </div>
  );
}
