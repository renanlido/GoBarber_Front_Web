const { addBabelPugin, override } = require('customize-cra');

module.exports = override(
  addBabelPugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
