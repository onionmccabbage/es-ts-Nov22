// to make Observables easy, we will use the RxJS library
import * as Rx from 'rxjs' // this resolves via the 'node' module setting in tsconfig

// we need a bit of the DOM to track
const s:HTMLElement = document.getElementById('search') // this will exist in the HTML
const r:HTMLElement = document.getElementById('results')

// we can make an observable from an event (or pretty much anything)
const keyup$ = Rx.Observable.fromEvent(s, 'keyup') // trailing $ indicates an Observable

// we can decide what to do with our observable (aka 'publisher')
keyup$ // here keycode is one of the members returned by a KeyboardEvent (within our Observable)
    .pluck('keycode') // case sensitive (aka a 'subscriber')

// we can subscribe to our observable
keyup$
    .do( ()=>{console.log(`early in the steps`)} ) // we can inject arbitrary steps with 'do'
    .subscribe( (keyCode:KeyboardEvent)=>{
        // we can convert the code to an actual key
        const k = keyCode.key
        console.log(`Key code is ${keyCode} which mmeans the user typed ${k}`)
        // we can echo the keys back on the web page
        r.innerHTML += `<span>${k}</span>`
    } )
// if all our subscribers have unsubscribed,the observable is marked for removal
// we can have as many subscribers as we like

keyup$
    .subscribe( (keyCode:KeyboardEvent)=>{
        // do stuff
    })

// an observable that returns suggestions from keystrokes
const categories:string[] = ['people', 'planets', 'species', 'starships', 'vehicles']
const searchBox:HTMLElement = document.querySelector('#input')
const result:HTMLElement = document.querySelector('#suggestions')
const suggest = (arr:string[], query:string)=>{
    return arr.filter( (item)=>{
        return query.length >0 && item.startsWith(query) // only return matching categories
    } )
}
const appendResults = (results:string[], container:HTMLElement)=>{  // append hte mathcing results to the HTML suggestions list
    for(const item of results){
        // build a collection of DOM list items <<<<<<<<<<<<<<<<<<<<<<<<
        const textEl = document.createTextNode(item)
        const listItemEl = document.createElement('li')
        listItemEl.appendChild(textEl)
        container.appendChild(listItemEl) // end up with <li>people</li> etc.
    }
}
const clearResults = (container:HTMLElement)=>{
    while(container.childElementCount >0) {
        container.removeChild(container.firstChild)
    }
}

// here is our observable
const cat$ = Rx.Observable.fromEvent(searchBox, 'keyup')
cat$
    .debounceTime(700) // give the user 700ms between checks
    .pluck('target', 'value') // target is where the event originated, value is the key code
    .map( (query:string)=>{
        return suggest(categories, query)
    } )
    .forEach( (results:string[])=>{ // this is our subscription - as soon as we start using the data, it is a subscription
        clearResults(result)
        appendResults(results, result)
    } )