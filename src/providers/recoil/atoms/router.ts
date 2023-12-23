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
  effects: [persistAtom(ROUTES_KEY)],
  key: ROUTES_KEY
})
export const hookRoute = selector({
  get: ({ get }) => get(router),
  key: 'hookRoute',
  set: ({ set }, newValue) => {
    set(
      router,
      newValue
    )
  }
})


export default hookRoute