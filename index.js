// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// cats.push("Ralph");
function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name){
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}
function removeFirstCat() {
  return cats.slice(1);
}

