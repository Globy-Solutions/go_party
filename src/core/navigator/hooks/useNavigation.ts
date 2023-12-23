/**
 * `useNavigation` is a React Hook that returns a `navigator` object that can be used to navigate
 * between screens
 * @returns The navigator object
 */

import { useNavigation as useNativeNavigation } from '@react-navigation/native';

import type { NavigatorProps } from '@core/navigator/types';

const useNavigation = () => {
  const navigation = useNativeNavigation<NavigatorProps>()
  const { navigate, goBack, dispatch } = navigation

  return { dispatch, goBack, navigate };
}

export default useNavigation;
