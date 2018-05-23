const { basename, dirname, extname, relative } = require('path')
const { readdirRecursivelySyncFlatten } = require('readdir-recursively-sync')

const generateEntry = (baseDir, extensions = ['.js']) =>
  readdirRecursivelySyncFlatten(baseDir)
    .filter(p => extensions.includes(extname(p)))
    .reduce(
      (prev, next) => ({
        ...prev,
        [relative(
          '.',
          `${dirname(relative(baseDir, next))}/${basename(next, extname(next))}`
        )]: next
      }),
      {}
    )

module.exports = generateEntry
module.exports.generateEntry = generateEntry
