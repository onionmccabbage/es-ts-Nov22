// from https://learntypescript.dev/07/l2-non-null-assertion-operator

const dup_A = (text: string | null) => {
    // if (text === null || text === undefined) {
    //     text = "";
    // }
    // return text.concat(text);
    return text!.concat(text!); // ! means ignore the possible null-ness (or undefined-ness)
}

// exercise the code
let t1 = dup_A('hello ')
let t2 = dup_A(null) // might fail when run, not during development

console.log(t1, t2)
