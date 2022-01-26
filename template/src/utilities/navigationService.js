import {createNavigationContainerRef} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
  if (!navigationRef.isReady()) {
    return;
  }
  navigationRef.navigate(name, params);
};

export const replace = (name, params) => {
  if (!navigationRef.isReady()) {
    return;
  }
  navigationRef.dispatch(StackActions.replace(name, params));
};

export const push = (...args) => {
  if (!navigationRef.isReady()) {
    return;
  }
  navigationRef.dispatch(StackActions.push(...args));
};

export const pop = (screenCount = 1) => {
  if (!navigationRef.isReady()) {
    return;
  }
  navigationRef.dispatch(StackActions.pop(screenCount));
};

export const popToTop = () => {
  if (!navigationRef.isReady()) {
    return;
  }
  navigationRef.dispatch(StackActions.popToTop());
};

export const goBack = () => {
  if (!navigationRef.isReady()) {
    return;
  }
  navigationRef.goBack();
};
