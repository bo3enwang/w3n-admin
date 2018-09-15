const { getLoader } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule => rule.loader && typeof rule.loader === "string" && rule.loader.includes("ts-loader")
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory({
          libraryDirectory: "es",
          libraryName: "antd",
          style: true
        }),
        tsImportPluginFactory({
          camel2DashComponentName: false,
          libraryDirectory: "lib",
          libraryName: "ant-design-pro",
          style: true
        })
      ]
    })
  };

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {}
  })(config, env);

  return config;
};
