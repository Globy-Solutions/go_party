import {
  ParamListBase,
  RouteProp,
  useRoute as useRouteNative
} from '@react-navigation/native';

/**
 * It takes a generic type T that extends RouteProp<ParamListBase> and returns a RouteProp<T>
 * @returns The route prop for the current screen.
 */
function useRoute<T extends RouteProp<ParamListBase>>() {
  const route = useRouteNative<T>();
  return route;
}

export default useRoute;