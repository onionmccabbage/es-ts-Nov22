// Promise is an ES6+ type
const go = (isWorking:boolean)=>{
    // Promises need a call-back function (either literal or named)
    return new Promise( (resolve, reject)=>{
        if (isWorking) {
            resolve('all good') // can return ANYTHING here
        } else {
            reject(new Error('something bad happened'))
        }
    } )
}

// exercise the code
// Promises are 'thenable' 
go(true) // pass true to resolve, false to reject the promise
    .then( (val)=>{console.log(val)} )
    .catch( (err)=>{console.log(err)} )

// promises are non-blocking
console.log('when does this happen...')