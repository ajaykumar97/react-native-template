declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

export type ScreensParams = {
  BootStrapApp: string;
  AuthNavigator: string;
  MainNavigator: string;
  Login: string;
  Signup: string;
  ForgotPassword: string;
  UsersScreen: string;
};
