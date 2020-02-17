import { HomeContext } from '../views/home/HomeProvider';
import { Page1Context } from '../views/page1/Page1Provider';
import { Page2Context } from '../views/page2/Page2Provider';
import { Page3Context } from '../views/page3/Page3Provider';

export const transformPathName = pn => {
  const pathArr = pn.split('/');
  return pathArr[1] ? pathArr[1] : 'home';
};

export const getContext = pn => {
  const pathArr = pn.split('/');
  switch (pathArr[1]) {
    case 'page1':
      return Page1Context;
    case 'page2':
      return Page2Context;
    case 'page3':
      return Page3Context;
    default:
      return HomeContext;
  }
};
