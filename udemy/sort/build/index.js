"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var Sort_1 = require("./Sort");
var charactersCollection = new CharactersCollection_1.CharactersCollection("Berkley");
var sort = new Sort_1.Sort(charactersCollection);
sort.sorter();
console.log(charactersCollection.data);
