import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import Page3Provider, { Page3Context } from './Page3Provider';
import { boxes } from '../../utils/constants';

export default function Page3() {
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          <Page3Provider>
            {boxes.map((box, index) => (
              <Counter
                key={`page1-${index}`}
                contextType={Page3Context}
                incType="INC_PAGE3"
                DecType="DEC_PAGE3"
                boxNumber={box}
              />
            ))}
          </Page3Provider>
        </div>
      </div>
    </div>
  );
}
