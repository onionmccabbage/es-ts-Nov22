// to make Observables easy, we will use the RxJS library
import * as Rx from 'rxjs' // this resolves via the 'node' module setting in tsconfig

// we ned a bit of hte DOM to track
const s:HTMLElement = document.getElementById('search') // this will exist in the HTML

// we can make an observable from an event (or pretty much anything)
const keyup$ = Rx.Observable.fromEvent(s, 'keyup') // trailing $ indicates an Observable

// we can decide what to do with our observable (aka 'publisher')
keyup$.pluck('keycode') // case sensitive (aka a 'subscriber')