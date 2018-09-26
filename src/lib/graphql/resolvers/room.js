const { Room, Book } = require('../../schema')

module.exports = {
    Room: {
        books: (room) => Book.find({ roomId: room._id })
    },
    Query: {
        rooms: (root, args, context, info) => {
            return Room.find({})
        },
        room: (root, args) => {
            return Room.findOne(args)
        }
    },
    Mutation: {
        async addRoom(_, args, ctx, info) {
            let data = args
            let room = await Room.findOne({ name: data.name })
            if (room) return new Error('room exists')
            return Room.create(data)
        }
    }
}