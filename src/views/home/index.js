import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Counter from '../../components/Counter';
import { boxes } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { incHome, decHome, resetHome } from './reducers';

export default function Home() {
  const { pageCount } = useSelector(store => store.home);
  const dispatch = useDispatch();
  React.useEffect(() => {
    return () => dispatch(resetHome());
  }, []);
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          {boxes.map((box, index) => (
            <Counter
              key={`home-${index}`}
              incHandler={() => dispatch(incHome())}
              decHandler={() => dispatch(decHome())}
              pageCount={pageCount}
              boxNumber={box}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
