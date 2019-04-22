const loaderUtils = require("loader-utils");

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const contexts = options.contexts || [];

  for (const context of contexts) {
    source = `with(${context}){${source}}`;
  }

  return source;
}