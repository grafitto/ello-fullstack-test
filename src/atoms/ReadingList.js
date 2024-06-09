import { atom } from 'recoil';

const readingList = atom({
  key: 'readingList',
  default: [],
});

export { readingList };
