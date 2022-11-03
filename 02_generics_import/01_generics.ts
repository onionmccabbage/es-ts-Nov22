{
    // a common problem - we may not know beforehand exactly what type we are dealing with
    function firstElement(a:Array<any>):any{
        return a[0] // we wanted the first element of the array
    }

    // the solution is top use generics
    //                  <T> can stand for any type (T by convention)
    const zeroElement = <T>(a:T[]):T=>{ // or (a:Array<T>)
        return a[0] // this will work for ANY array of ANY type
    }
    const a_s:Array<string> = ['alpha', 'beta', 'gamma']
    const a_n:number[] = [4,3,2]
    console.log( zeroElement(a_s) )
    console.log( zeroElement(a_n) )

    // we can have multiple generic types (use a comma)
    // see https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints
    const zeroElementMult = <T, Q>(a:T[], b?:Q[]):T=>{ // or (a:Array<T>)
        return a[0] // this will work for ANY array of ANY type
    }

    console.log( zeroElementMult(a_s) )
    console.log( zeroElementMult(a_n) )

}