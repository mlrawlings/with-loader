# `with-loader`

![image](https://img.shields.io/badge/🔥-Blazing%20Fast-red.svg)
![image](https://img.shields.io/badge/👌-Production%20Ready-00ddcc.svg)
![image](https://img.shields.io/badge/🐛-Bug%20Free-green.svg)
![image](https://img.shields.io/badge/🦄-Just%20Works-cc00cc.svg)

## Why

- 📦 reduce bundle size by eliminating property access
- 💄 less code === more beautiful code
- 💥 your co-workers won't know what hit them
- 🚀 totally not a bad idea

## Installation

```
npm i -D with-loader
```

## Example Usage

Within your webpack configuration object, you'll need to add the with-loader to the list of modules, like so:

```js
module: {
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: 'with-loader',
        options: {
          contexts: ['Math', JSON.stringify({ radius:10 })]
        }
      }
    }
  ]
}
```

Now the code that we're bundling can access variables from `Math` and our custom object!

```js
const area = PI * pow(radius, 2);
```

![image](https://i.kym-cdn.com/photos/images/newsfeed/000/538/716/7f5.gif)
