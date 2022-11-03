// this file will become dist/app.js for use in index.html

{
    // a method to fetch data from an end-point API
    // we are not obliged to use typescript but it helps in development
    //                  <T> tells typescript we will use generics here, ther wil be a cosnistent type
    const fetchPhotos = <T>():Promise<Array<T> | string >=>{
        const API = `https://jsonplaceholder.typicode.com/photos` // just get all the data
    }


    // usse the code
    fetchPhotos()
        .then( ()=>{} )
        .catch( ()=>{} ) // always code for errors
}