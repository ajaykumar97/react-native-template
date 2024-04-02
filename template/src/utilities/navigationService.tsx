import {
  createNavigationContainerRef,
  RouteProp,
  StackActions,
} from '@react-navigation/native';

import {ScreensParams} from '../navigation/types';

type Params = Record<string, any>;

export const navigationRef = createNavigationContainerRef();

export const navigate = <T extends keyof ScreensParams>(
  name: T,
  params?: RouteProp<ScreensParams, T>['params'],
) => {
  if (navigationRef.current?.isReady()) {
    return navigationRef.current.navigate(name, params);
  }
  let navigationAttemptsCount = 0;
  const navigationAttemptsIntervals = setInterval(() => {
    if (navigationRef.current?.isReady()) {
      navigationRef.current.navigate(name, params);
      clearInterval(navigationAttemptsIntervals);
      return;
    }
    if (!navigationRef?.current?.isReady()) {
      navigationAttemptsCount += 1;
      return;
    }

    if (navigationAttemptsCount === 5) {
      clearInterval(navigationAttemptsIntervals);
      return;
    }
  }, 1000);
};

export const replace = (name: string, params?: Params) => {
  if (navigationRef.current?.isReady()) {
    return navigationRef.current.dispatch(StackActions.replace(name, params));
  }
  let replaceAttemptsCount = 0;
  const replaceAttemptsIntervals = setInterval(() => {
    if (navigationRef.current?.isReady()) {
      navigationRef.current.dispatch(StackActions.replace(name, params));
      clearInterval(replaceAttemptsIntervals);
      return;
    }
    if (!navigationRef?.current?.isReady()) {
      replaceAttemptsCount += 1;
      return;
    }

    if (replaceAttemptsCount === 5) {
      clearInterval(replaceAttemptsIntervals);
      return;
    }
  }, 1000);
};

export const push = <T extends keyof ScreensParams>(
  name: T,
  params?:
    | {
        screen: T;
        key?: string;
        params: ScreensParams[T];
        merge?: boolean;
      }
    | ScreensParams[T],
) => {
  if (navigationRef.current?.isReady()) {
    return navigationRef.current.dispatch(StackActions.push(name, params));
  }
  let pushAttemptsCount = 0;
  const pushAttemptsIntervals = setInterval(() => {
    if (navigationRef?.current?.isReady()) {
      navigationRef.current.dispatch(StackActions.push(name, params));
      clearInterval(pushAttemptsIntervals);
      return;
    }
    if (!navigationRef.current?.isReady()) {
      pushAttemptsCount += 1;
      return;
    }

    if (pushAttemptsCount === 5) {
      clearInterval(pushAttemptsIntervals);
      return;
    }
  }, 1000);
};

export const pop = (screenCount: number = 1) => {
  if (!navigationRef.current?.isReady()) {
    return;
  }
  navigationRef.current.dispatch(StackActions.pop(screenCount));
};

export const popToTop = () => {
  if (!navigationRef.current?.isReady()) {
    return;
  }
  navigationRef.current.dispatch(StackActions.popToTop());
};

export const goBack = () => {
  if (!navigationRef.current?.isReady() || !navigationRef.current.canGoBack()) {
    return;
  }
  navigationRef.current.goBack();
};
