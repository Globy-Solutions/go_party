module.exports = {
  assets: ['./src/assets/fonts/'],
  project: {
    ios: {
      automaticPodsInstallation: true
    }
  },
  dependencies: {
    ...(process.env.NO_FLIPPER ? { 'react-native-flipper': { platforms: { ios: null } } } : {}),
    'react-native-vector-icons': {
      platforms: {
        ios: null
      }
    }
  }
};