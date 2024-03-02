
/* config-overrides.js */
const {
    rewiredSingleSpa,
    rewiredSingleSpaDevServer,
  } = require('./CONFIG/single-spa');
  
// use `customize-cra`
const { override, overrideDevServer, addWebpackResolve } = require("customize-cra");

module.exports = {
    webpack: override(
      rewiredSingleSpa({
        orgName: "oci",
        projectName: "travel-old",
        reactPackagesAsExternal: true,
        peerDepsAsExternal: true,
        orgPackagesAsExternal: true,
        outputFilename:'oci-travel-old'
      }),
      addWebpackResolve({
        preferRelative:true
      })
    ),
    devServer: overrideDevServer(
        rewiredSingleSpaDevServer()
    ),
}