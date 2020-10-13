const path = require('path');

module.exports = ({ config }) => {
  config.devtool = 'inline-source-map';

  //config.entry.push(path.resolve(__dirname, '../storystyles/app.scss'));

  config.module.rules.push(
    {
      test: /\.scss$/, ///app\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        //'resolve-url-loader',
        'sass-loader'
      ],
      exclude: /\.module\.scss$/,
      include: [
        path.resolve(__dirname, '../node_modules'),
        path.resolve(__dirname, '../')
      ]
    },
    {
      test: /\.module\.scss$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
        //{ loader: 'resolve-url-loader' },
        { loader: 'sass-loader' }
      ],
      include: [path.resolve(__dirname, '../')]
    }
  );

  return config;
};
