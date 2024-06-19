import {hideAsync} from "expo-splash-screen";
import React, {useEffect} from "react";
import logger from "react-native-simple-logger";

import {ACCESS_TOKEN, SCREEN_NAMES} from "../../../utilities/constants";
import {getSecuredData} from "../../../utilities/helperFunctions/localStorage";
import {replace} from '../../../utilities/navigationService';

interface BootStrapAppProps {}

const BootstrapApp: React.FC<BootStrapAppProps> = () => {
  const bootstrapApp = async () => {
    try {
      const user = await getSecuredData(ACCESS_TOKEN);

      if (!user) {
        const error = 'userData not found';
        throw error;
      }

      replace(SCREEN_NAMES.MainNavigator);

      setTimeout(async () => {
        await hideAsync();
      }, 300);
    } catch (error) {
      logger.error('bootstrapApp error: ', error);
      replace(SCREEN_NAMES.AuthNavigator);
      setTimeout(async () => {
        await hideAsync();
      }, 300);
    }
  };

  useEffect(() => {
    bootstrapApp();
  }, []);

  return null;
};

export default BootstrapApp;
