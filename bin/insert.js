const db = require('../src/lib/service/db')
const { Book, Room } = require('../src/lib/schema')
async function run() {
    await db.connect()
    let rooms = await Room.insertMany([
        {
            name: 'room1'
        },
        {
            name: 'room2'
        }
    ])
    await Book.insertMany([
        {
            name: 'book1',
            author: 'author1',
            roomId: rooms[0]._id
        },
        {
            name: 'book2',
            author: 'author2',
            roomId:  rooms[0]._id
        },
        {
            name: 'book3',
            author: 'author3',
            roomId:  rooms[1]._id
        }
    ])
}

run()