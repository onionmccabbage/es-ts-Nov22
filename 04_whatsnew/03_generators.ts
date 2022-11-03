// ES6+ introduced generators - these yield repeatedly, rather than just one return
// here is a fibonacci generator
function* fibon(){ // the astetrisk makes this a generator - we MUST use the function keyword
    let first=1, second=2
    // here is an endless loop
    for (;;){ // same as for let i=0; i<Number.POSITIVE_INFINITY; i++
        let sum = first+second
        yield `The next value is ${sum}`
        first = second
        second = sum
    }
}

const prettyPrint = (item:IteratorResult<string>)=>{console.log(JSON.stringify(item))}

// we need an instance of our generator
const g = fibon() // we need to call the generator function once
prettyPrint( g.next() ) // yields 3
prettyPrint( g.next() ) // yields 5
prettyPrint( g.next() ) // yields 8
prettyPrint( g.next() ) // yields 13