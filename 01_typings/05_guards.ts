{
    // we may need to guardagainst type oddities
    const eg = (sn:string | number)=>{
        // if we get a string, then return the length
        if (typeof sn == 'string'){ // this is a type guard
            return sn.length
        } else {
            return sn.toFixed(2)
        }
    }
               
    const words = 'one point four nine six'
    const num   = 1.496

    console.log(eg(words))
    console.log(eg(num))

}