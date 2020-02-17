import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import Page1Provider, { Page1Context } from './Page1Provider';
import { boxes } from '../../utils/constants';

export default function Page1() {
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          <Page1Provider>
            {boxes.map((box, index) => (
              <Counter
                key={`page1-${index}`}
                contextType={Page1Context}
                incType="INC_PAGE1"
                DecType="DEC_PAGE1"
                boxNumber={box}
              />
            ))}
          </Page1Provider>
        </div>
      </div>
    </div>
  );
}
