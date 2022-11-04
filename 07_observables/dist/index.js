// to make Observables easy, we will use the RxJS library
import * as Rx from 'rxjs'; // this resolves via the 'node' module setting in tsconfig
// we need a bit of the DOM to track
const s = document.getElementById('search'); // this will exist in the HTML
const r = document.getElementById('results');
// we can make an observable from an event (or pretty much anything)
const keyup$ = Rx.Observable.fromEvent(s, 'keyup'); // trailing $ indicates an Observable
// we can decide what to do with our observable (aka 'publisher')
keyup$
    .pluck('keycode'); // case sensitive (aka a 'subscriber')
// we can subscribe to our observable
keyup$
    .do(() => { console.log(`early in the steps`); }) // we can inject arbitrary steps with 'do'
    .subscribe((keyCode) => {
    // we can convert the code to an actual key
    const k = keyCode.key;
    console.log(`Key code is ${keyCode} which mmeans the user typed ${k}`);
    // we can echo the keys back on the web page
    r.innerHTML += `<span>${k}</span>`;
});
// if all our subscribers have unsubscribed,the observable is marked for removal
// we can have as many subscribers as we like
keyup$
    .subscribe((keyCode) => {
    // do stuff
});
// an observable that returns suggestions from keystrokes
const categories = ['people', 'planets', 'species', 'starships', 'vehicles'];
const searchBox = document.querySelector('#input');
const result = document.querySelector('#suggestions');
const suggest = (arr, query) => {
    return arr.filter((item) => {
        return query.length > 0 && item.startsWith(query); // only return matching categories
    });
};
const appendResults = (results, container) => {
    for (const item of results) {
        // build a collection of DOM list items <<<<<<<<<<<<<<<<<<<<<<<<
        const textEl = document.createTextNode(item);
        const listItemEl = document.createElement('li');
        listItemEl.appendChild(textEl);
        container.appendChild(listItemEl); // end up with <li>people</li> etc.
    }
};
const clearResults = (container) => {
    while (container.childElementCount > 0) {
        container.removeChild(container.firstChild);
    }
};
// here is our observable
const cat$ = Rx.Observable.fromEvent(searchBox, 'keyup');
cat$
    .pluck('target', 'value') // target is where the event originated, value is the key code
    .map((query) => {
    return suggest(categories, query);
})
    .forEach((results) => {
    clearResults(result);
    appendResults(results, result);
});
