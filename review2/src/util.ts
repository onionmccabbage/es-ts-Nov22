// NOT USED IN THIS EXAMPLE

import {User, Photo} from './types' 
// we need to filter the users to leave just username, email and website
// here we construct a set of HTML list items
export const listOfUsers = (users: User[]) => { // what type is listOfUsers
    const names = users.map(user => `<li>${user.name} ${user.email} ${user.website}</li>`).join("\n");
    return `<ul>${names}</ul>`
}

export const getListOfPhotos = (photos: Photo[]) => {
    console.log(photos)
    const titles = photos
        .map((photo: Photo) => `<li>${photo['title']}</li>`)
        .join("\n");
    return `<ul>${titles}</ul>`
}