import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import Page2Provider, { Page2Context } from './Page2Provider';
import { boxes } from '../../utils/constants';

export default function Page2() {
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          <Page2Provider>
            {boxes.map((box, index) => (
              <Counter
                key={`page1-${index}`}
                contextType={Page2Context}
                incType="INC_PAGE2"
                DecType="DEC_PAGE2"
                boxNumber={box}
              />
            ))}
          </Page2Provider>
        </div>
      </div>
    </div>
  );
}
