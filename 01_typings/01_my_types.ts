
let a = 1 // this is TypeScript - infer the type (recommended practice)
let b:number = 2 // we can be explicit with types
a = 99
// a = 'oops' // nope - TS insists its a number

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
    
}