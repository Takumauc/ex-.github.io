// const items = [
//     {n:100},
//     {a:{b:["abc"]}, c:{"100":"foobar"}}
// ]
// console.log(items[0].n); ok
// console.log(items[1].a.b[0]); ok
// console.log(items[1].c['100']); ok

// ---------------------------------------------------// 

const json = `{
    "total":2,
    "items":[{
        "name":"Item 123", "id":123
    },
    {
        "name":"Item456","id":456
    }
    ],
    "next":{"id":789}
}`
const obj = JSON.parse(json);
console.log(obj.total); 
console.log(obj.items[0].name); 
console.log(obj.items[0].id); 
console.log(obj.items[1].name); 
console.log(obj.items[1].id); 
console.log(obj.next.id); 