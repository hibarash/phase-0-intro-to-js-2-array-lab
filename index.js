// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    return cats.push(name)
}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}
function appendCat(name) {
    const addedCat = ([...cats, name])
    return addedCat
}
function prependCat(name) {
    const prependCat = [name, ...cats ]
    return prependCat
}
function removeLastCat() {
    return cats.slice(0,2)
}
function removeFirstCat(){
    return cats.slice(1)
}