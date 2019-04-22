const path = require("path");
const assert = require("assert");
const webpack = require("webpack");

webpack({
  entry: path.join(__dirname, "input.js"),
  output: {
    path: __dirname,
    filename: "output.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: require.resolve("../"),
          options: {
            contexts: ['Math', JSON.stringify({ radius:10 })]
          }
        }
      }
    ]
  }
}, (err, stats) => {
  assert.ifError(err);
  const output = require("./output");
  assert.equal(output, Math.PI * 100);
  console.log("PASS", output);
});