import * as mydata from './data.json'

import {Photo} from '../01_typings/02_interface_class'
import {Post} from './03_modules'
import {Penguin, Dog} from './03_modules'

// we tend to avoid * except for libraries (and json)
import * as maths from './04_maths'
// alternatively we can pick and choose
import RandomThing, {phi, pi} from './04_maths'

// use our imports
console.log(maths.phi, pi)
const r = new RandomThing
type Animals = Penguin | Dog

const gromit:Dog = {breeds:['plasticene', 'silicone'], yearOfBith:1991}
const feathers:Penguin = {breed:'rock-hopper', yearOfBirth:1998}

const posts:Post[] = mydata // we are now type safe
console.log(posts[0]['title'], typeof(posts) )