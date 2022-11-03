// NOT USED IN THIS EXAMPLE
// we need to filter the users to leave just username, email and website
// here we construct a set of HTML list items
export const listOfUsers = (users) => {
    const names = users.map(user => `<li>${user.name} ${user.email} ${user.website}</li>`).join("\n");
    return `<ul>${names}</ul>`;
};
export const getListOfPhotos = (photos) => {
    console.log(photos);
    const titles = photos
        .map((photo) => `<li>${photo['title']}</li>`)
        .join("\n");
    return `<ul>${titles}</ul>`;
};
