export const transformPathName = pn => {
  const pathArr = pn.split('/');
  return pathArr[1] ? pathArr[1] : 'home';
};
