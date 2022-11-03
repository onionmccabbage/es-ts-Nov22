// destructuring in ES6+
{
    // unpack an array (the rest operator)
    const values = [1, 3, 6, 11, 215, 21, 66, 42]
    //                             ... is an ellipsis
    const [zeroth, first, , third, ...rest] = values
    console.log(zeroth, first, third, rest)
}
{
    // the spread operator
    const squares = [1, 4, 9, 16, 25]
    const powers  = [2, 4, 8, 16, 32]
    const both = [...squares, ...powers]
    console.log(both)
}
{
    // tuple destructuring NOT Array[type] but an array of a collection of types
    const getMission = ():[string, string, string]=>{
        return ['inform', 'educate', 'entertain']
    }
    const [inf, edu, ent] = getMission() // destructure the returned tuple
    console.log(`Mission: ${inf}, ${edu}, ${ent}`)
}
{
    // object destructuring

}