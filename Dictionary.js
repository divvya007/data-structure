// data structure - dictionary
console.log("............dictionary......");
class Dictionary {
  #dataStore = {};

  add(key, value) {
    this.#dataStore[key] = value;
    console.log("this.#dataStore:", this.#dataStore);
  }
}

let myDictionary = new Dictionary();

myDictionary.add("name", "john doe");
