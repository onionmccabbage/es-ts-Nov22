export interface Post {
    userId : number
    id     : number
    title  : string
    body   : string
}

export type Penguin = {
    breed:string,
    yearOfBirth:number
}

export interface Dog {
    breeds:string[]
    yearOfBith:number
    legs?:number
}