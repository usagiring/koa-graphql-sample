const { Book, Room } = require('../../schema')

module.exports = {
    Book: {
        room: (book)=> Room.findOne({_id: book.roomId})
    },
    Query: {
        books: (root, args, context, info) => {
            return Book.find({})
        },
        book: (root, args) => {
            return Book.findOne(args)
        }
    },
    Mutation: {
        addBook(_, args) {
            let data = args
            return Book.create(data)
        }
    }
}