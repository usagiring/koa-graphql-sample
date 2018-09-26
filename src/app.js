const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa')
const db = require('./lib/service/db')

const typeDefs = gql(require('./lib/graphql/typeDefs'))
const resolvers = require('./lib/graphql/resolvers')

const app = new Koa();
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })

module.exports = {
    run: async (port) => {
        await db.connect()
        await app.listen(port)
        console.log(`Server Listening ${port}`)
    },
    app
}

