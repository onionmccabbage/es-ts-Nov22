// build a tuple of repeating types
let employees:[number, string] = [1, 'Ethel']
employees.push(2, 'Ada')
employees.push(3, 'Beth')
employees.push(4, 'Carol')

console.log(employees)

// see https://www.tutorialsteacher.com/typescript/typescript-tuple
// optional members of a tuple
type StaffAc = [number, string, string?] // optional tuple member
const staff:StaffAc[] = [ [1, 'A', 'B'],  [2, 'C'] ]