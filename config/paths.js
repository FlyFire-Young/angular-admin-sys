'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appMainTs: resolveApp('src/main.ts'),
  appBuild: resolveApp('dist'),
  srcPublic: resolveApp('src')
};
