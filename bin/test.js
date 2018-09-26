let obj1 = {
    a: 'a',
    b: 'b'
}

let obj2 = {
    c: 'C',
    d: 'd'
}

let arr = [obj1,obj2]

let obj3 = {}

arr.forEach(obj =>{
    Object.assign(obj3, obj)
})

console.log(obj3)

let {ObjectId} = require('../src/lib/service/db') 
console.log( new ObjectId('5ba63da14648dc06d4498884'))