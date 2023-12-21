/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from 'recoil';

import persistAtom from './persistAtom';

export type Route = {
  key: string | undefined,
  name?: string,
  params?: any
}

const ROUTES_KEY = 'router';

export const router = atom<Route>({
  default: { key: undefined, params: null },
  key: ROUTES_KEY,
  effects: [persistAtom(ROUTES_KEY)],
})
export const hookRoute = selector({
  key: 'hookRoute',
  get: ({ get }) => get(router),
  set: ({ set }, newValue) => {
    set(
      router,
      newValue
    )
  }
})


export default hookRoute