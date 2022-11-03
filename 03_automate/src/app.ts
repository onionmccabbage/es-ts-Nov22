// this file will become dist/app.js for use in index.html

import {Photo} from '../../01_typings/02_interface_class'

interface Snap extends Photo {
    other:string
}


{
    // a method to fetch data from an end-point API
    // we are not obliged to use typescript but it helps in development
    //                        <T> tells typescript we will use generics here, there will be a cosnistent type
    const fetchPhotos = async <T>():Promise<Array<T> | string>=>{ // or <Photo>
        const API = `https://jsonplaceholder.typicode.com/photos` // just get all the data
        try {
            // 'fetch' is part of ES6+
            const response = await fetch(API) // NB this is BROWSER ONLY!!!!!!!!
            // some useful debug info
            console.log(`${response}, ${typeof(response)}`)
            // also consider response.text, or response.html etc.
            return response.json() // as Promise<Array<T>> // this is the promise we will handle, containing an array
        }
        catch (err) { // we should consider data typing here
            if (err){
                return err.message
            }
        }
        finally {} // always runs
    }

    // use the code
    fetchPhotos()
        // we can et by with 'any' and revisit this type...(maybe our Photo type)
        .then( (d:Array<Photo> | string)=>{
            if (typeof(d)=='string'){} // a simple type guard
            else{
                console.log(`We received ${d[0].title}`)
                // grab the DOM elements and inject stuff into them
                const c = document.getElementById('content')
                const i = document.getElementById('thumbnail')
                c.innerHTML = d[0]['title'] // use square-bracket notation if TS cannot know the actual properties
                i.setAttribute('src', d[0].thumbnailUrl) //use dot notation if TS CAN know the members of a type
                i.setAttribute('title', d[0].title)
                i.setAttribute('alt', d[0].title)
            }
        } )
        .catch( ()=>{} ) // always code for errors
    // async await is asynchronous - it waits fro a resposne (or error)
    console.log('prior to the return of async')
}