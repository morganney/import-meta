# Webpack dynamic `import.meta.url`

By default Webpack will use the module's static `file:` URL when using `import.meta.url`. You can [configure Webpack to not overwrite that value](https://webpack.js.org/configuration/module/#moduleparserjavascriptimportmeta) but instead have the [usual runtime definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta#url).

- `npm install`
- `npm run build`
- `npm run preview` navigate to http://localhost:3000
