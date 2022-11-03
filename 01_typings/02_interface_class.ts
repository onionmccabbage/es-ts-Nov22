// TS has interface as a keyowrd
export interface Photo {
    albumId      :  number
    id           :  number
    title        :  string
    url          :  string
    thumbnailUrl :  string
    ooblywoobly? :  object // an optional member
    // we can declare methods
    pretty? : (x:boolean)=>{} // we could declarea return type, but no need
}
// an ES class can implement an interface
class Snap implements Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
    // we can optionally declare a constructor
    constructor(snap:Photo){
        this.albumId = snap.albumId
        this.id = snap.id
        this.title = snap.title
        this.url = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }
    pretty ():string {
        return `${this.title}: ${this.url}`
    };
}

// we need a bunch of data (usually from external API)
//              [] means an array of the type
// let photos:Photo[] = [ // this is how we data-type an array
let photos:Array<Photo> = [ // this is an alternative syntax
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    }
]

// exercise the code
const s1 = new Snap({ // this is duck typing - if it looks like a duck, walks like a duck, quacks like a duck - its a duck
    "albumId": 1,
    "id"     : 16,
    "title"  : 'nearly lunch',
    "url"    : 'http://nonsuch.com',
    "thumbnailUrl" : ''
})
console.log( s1.pretty() )
const s2 = new Snap(photos[3])
console.log( s2.pretty() )