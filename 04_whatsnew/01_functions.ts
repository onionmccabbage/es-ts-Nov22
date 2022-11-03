// how to write a fucntion - let me coutn the ways
// if there is one input param and one line of output...
const fnB = x=>x*x // look - no braces and no 'return' statement (and NO data typing)
const fnC = x=>{return x*x}
const fnD = (x:number, y:number)=>x*x // zero or multiple args MUST be in braces (return is implied)
const fnE = ()=>{ return 'zero params'}

const fnF = (x:number)=>{return x*x} // if we have {} we MUST specify return (if needed)

// how about functions within classes
class Demo {
    someMethod (){
        // body of method goes here
    }
    //or
    otherMethod = ()=>{
        // body
    }
}
// old-skool functions
doStuff(2,3) //we can call a fn befoe it is declared
function doStuff(x:number, y:number, z?:number){
    return n // we can call a 'var' befoe it is declared ('hoisting')
    var n = x+y // we could do this in old JS  - DO NOPT USE VAR - use let
}
// modern preference....
const doOtherStuff = (x:number, y:number, z?:number)=>{
    let n = x+y
    return n 
}
doOtherStuff(3,4) // CANNOT call before declaration