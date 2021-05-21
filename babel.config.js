module.exports = function (api) {
  api.cache(false);
  const config = {
    presets: [
      ['@babel/preset-env', { loose: true }],
      [
        '@babel/preset-react',
        { runtime: 'automatic', importSource: '@emotion/react' },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
        },
      ],
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      '@emotion/babel-plugin',
    ],
    ignore: ['**/node_modules'],
  };
  return config;
};
