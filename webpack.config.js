const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bytebank",
    projectName: "home",
    webpackConfigEnv,
    argv,
  });

  // Adicionando suporte para SCSS
  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/, // Procura por arquivos .scss
          use: [
            "style-loader",  // Adiciona CSS ao DOM
            "css-loader",    // Processa arquivos CSS
            "sass-loader",   // Compila SCSS para CSS
          ],
        },
      ],
    },
  });
};
