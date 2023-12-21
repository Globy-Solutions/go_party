/* eslint-disable no-console, no-restricted-syntax */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';

import hookRoute from '@providers/recoil/atoms/router';

// import type { ThemeProps } from '@props/theme';
import type { LinkingOptions } from '@react-navigation/native';
import type { NavigationState } from '@react-navigation/routers';
import type { ReactNode, SetStateAction } from 'react';
import { useSetRecoilState } from 'recoil';

interface Props {
  /* Set stacks to generate routes */
  children: ReactNode;
  /* Set in true when is used in SuperApp */
  independent?: boolean;
  linking?: LinkingOptions<Props>;
  /**
   * @param onReady: Function which is called after the navigation container and all its children finish mounting for the first time
   */
  onReady?: (() => void) | undefined;
  /**
   * @param CATALOGMode: Boolean. When it's true, set to 100% the sampling rate of Datadog, for testing purposes
   */
  CATALOGMode?: boolean;
  theme?: any // ThemeProps
}

interface Routes { key: string; name: string; state: NavigationState }
interface Route { routes: { state: { routes: Routes[]; }; }[]; }
interface NestedRoute { name: SetStateAction<string | null> }

function Container({
  children,
  independent = true,
  linking,
  theme,
  onReady,
  CATALOGMode = true
}: Props) {
  const updateCurrentRoute = useSetRecoilState(hookRoute);
  const [currentRouteName, setCurrentRouteName] = useState<string | null>(null);
  const handleNavigationStateChange = useCallback((state: Route) => {
    state.routes.forEach((route: { state: { routes: unknown[] } }) => {

      if (route.state) {
        route.state.routes.forEach(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (nestedRoute: NestedRoute) => {
            setCurrentRouteName(nestedRoute.name);
          },
        );
      }
    });
  }, []);

  useEffect(() => {
    let routeInfo = {
      key: currentRouteName ?? 'AppInBackground',
      name: currentRouteName ?? 'AppInBackground',
      timestampMs: Date.now()
    }
    CATALOGMode && console.log(routeInfo);
    updateCurrentRoute(routeInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRouteName]);

  return (
    <NavigationContainer
      onStateChange={(state: NavigationState | undefined) => handleNavigationStateChange(state as Route)}
      linking={linking}
      independent={independent}
      onReady={onReady}
      theme={theme}
    >
      {children}
    </NavigationContainer>
  );
}

export { Container, createNativeStackNavigator };
