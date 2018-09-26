
const path = require('path')
const fs = require('fs')

let typeDefs = ''
const rootPath = path.join(__dirname, './typeDefs');

fs.readdirSync(rootPath).forEach(typeDef => {
    typeDefs += fs.readFileSync(path.join(rootPath, typeDef), 'utf8')
})

module.exports = typeDefs