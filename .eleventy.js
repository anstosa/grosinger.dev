module.exports = (config) => {
  config.addWatchTarget('./_tmp/style.css')
  config.addPassthroughCopy({
    './_tmp/style.css': './style.css',
  });
  config.addPlugin(require("eleventy-plugin-svg-contents"));

  return {
    dir: {
      input: "src",
      layouts: "_layouts",
      output: "dist"
    }
  };
}