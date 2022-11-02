{
    let a = 1 // this is TypeScript - infer the type (recommended practice)
    let b:number = 2 // we can be explicit with types
    a = 99
    // a = 'oops' // nope - TS insists its a number
}

{ // here is a code block - a separate scope
    let a = 'ok' // this 'a' is infered to be a string type
    const b  = 'immutable constant'
    // there are many JS types number, string, boolean, array, object
    // typescript adds types for void and any
    let c:any = 1
    c = 'three' // so why bother typing it then?
    // also tuple and dictionary types (also ccan map types)
    // typescript has several mechanisms to declare your own types
    // literal, enum, class, interface
    // literal type
    type Kingdom  = 'Bacteria' | 'Protozoa' | 'Chromista'
    let k:Kingdom = 'Protozoa'
    type Arbitrary = 'literaly this' | 10 | false // any mix of types
    let r:Arbitrary = false
    // r = true
}
{
    // creating enumeration types - enum
    enum BoxSize {
        Small, // implicitly Small is set to 0
        Medium // 
    }

    let c = BoxSize.Large // it looks ahead

    // enums are extendable
    enum BoxSize {
        Large=2, // explicitly set to 2
        XLarge  // implicitly 3
    }

    // here the variable type can only be 'BoxSize'
    let boxType = BoxSize.Medium // i.e. 1
    // we can use 'console'
    // if we have tsconfig and "DOM"
    console.log(boxType)
}
{
    // data-typing functions
    // function to convert a number to a string
    // data-type your arguments and your return type
    type permitted = number | string
    const fn = (x:number | string):string=>{
    // const fn = (x:permitted):string=>{ // or make use of a literal type
        return `${x}` // here we use string interpolation (back-tick syntax)
    }

    type my_type = boolean | number | string
    const fnB = ():my_type=>{
        // return Number.NaN //'ok'
        return undefined // undefined and null can stand for anything
    }

    // return null
    const fbC = ():null=>{
        return null // we MUST return null!!!
    }

    let not_null = 'ok'

    // allow optional params
    const fnD = (nope?:any):void=>{ // ? means param is optional
        // nothing to see here
    }

    // exercise the code
    let x = fn(1)
    console.log( x, typeof(x) )
    let y = fnD() // param was optional
    let z = fnD(null) // param was optional
}
{
    // tuple type (applies to an array of values)
    let poem:[number, boolean, string] // this type MUST be exactly so
    poem = [1, true, 'love']
    let part = poem[2]
    console.log(part)
}
