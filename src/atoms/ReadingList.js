import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const readingList = atom({
  key: 'readingList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export { readingList };
