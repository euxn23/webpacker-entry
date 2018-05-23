# webpacker-entry

Generate webpack.config.entry suit to rails with webpacker.

This module would be useful if you use webpack.config on webpack way, without webpacker.js.

If you would like to use **configurable** **standalone** **webpack-way** config, [webpacker-pure-config](https://github.com/euxn23/webpacker-pure-config) is also useful.

## Usage

```js
const { generateEntry } = require('webpacker-entry')

module.exports {
  /* your cool webpack config */
  entry: generateEntry({ baseDir: 'path/to/source/dir', extensions: [ '.ts', '.tsx' ] })
  /* ... */
}
```

* options and default
  * baseDir: string = 'app/javascript/packs'
  * extensions: string[] = [ '.js' ]

## Notes

* supports Node.js 8.x+

## Licence

MIT
