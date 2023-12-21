import { atom } from 'recoil';

import persistAtom from './persistAtom';

const FAVORITES_KEY = 'favorites';

export const favorites = atom<Array<number>>({
  key: FAVORITES_KEY,
  default: [],
  effects: [persistAtom(FAVORITES_KEY)],
});
