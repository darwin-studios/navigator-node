const sdk = require('./generated/cjs/index.js');
module.exports = {
  ...sdk,
  NavigatorClient: sdk.DarwinClient,
  NavigatorEnvironment: sdk.DarwinEnvironment,
  NavigatorError: sdk.DarwinError,
  NavigatorTimeoutError: sdk.DarwinTimeoutError,
};
