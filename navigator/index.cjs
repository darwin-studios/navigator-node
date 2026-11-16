const sdk = require('@darwinso/sdk');
module.exports = {
  ...sdk,
  NavigatorClient: sdk.DarwinClient,
  NavigatorEnvironment: sdk.DarwinEnvironment,
  NavigatorError: sdk.DarwinError,
  NavigatorTimeoutError: sdk.DarwinTimeoutError,
};
