// n*100-5
// (n+3)*8+3

const add3 = x => x+3
const sub5 = x => x-5
const mul100 = x => x*100
const mul8 = x => x*8

const fomula1 = (f, g, n) => {
    return f(g(n));
}
const fomula2 = (f, g, h, n) => {
    return f(g(h(n)));
}
const n = 4;
const result1 = fomula1(sub5, mul100, n);
const result2 = fomula2(add3, mul8, add3, n);
console.log(result1);
console.log(result2);

//-----------------------------------------------------------//

const items = [
    // 日  月  火  水  木  金  土
      [14, 93, 89, 51, 85, 59, 33],
      [69, 27, 40, 76, 25, 21, 55],
      [55, 60,  3, 28, 49,  5, 91],
      [19, 56, 92, 66, 53, 80, 13],
    ]
    
    const sums = items.map((item) => {
        let sum = 0;
        for(let i=0; i<item.length; i++) {
            sum += item[i];
        }
        return sum;
    })
    console.log(sums) //=> [424, 313, 291, 379]