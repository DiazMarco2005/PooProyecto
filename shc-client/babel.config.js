module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel", 
      "react-native-reanimated/plugin",
      [
        'module:react-native-dotenv',
        {
          path: '.env',
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};