import { atom } from 'recoil';

const searchResults = atom({
  key: 'searchResults',
  default: [],
});

export { searchResults };
