const {mergeConfig} = require('@react-native/metro-config');
const {getDefaultConfig} = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 *  https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

/* fix for: https://github.com/axios/axios/issues/6899 */
config.resolver.resolveRequest = function packageExportsResolver(
  context,
  moduleImport,
  platform
) {
  // Use the browser version of the package for React Native
  if (moduleImport === "axios" || moduleImport.startsWith("axios/")) {
    return context.resolveRequest(
      {
        ...context,
        unstable_conditionNames: ["browser"],
      },
      moduleImport,
      platform
    );
  }

  // Fall back to normal resolution
  return context.resolveRequest(context, moduleImport, platform);
};

module.exports = mergeConfig(defaultConfig, config);
