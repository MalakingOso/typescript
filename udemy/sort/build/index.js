"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var LinkedList_1 = require("./LinkedList");
var charactersCollection = new CharactersCollection_1.CharactersCollection("Xabby");
charactersCollection.ccSorter;
var nc = new NumbersCollection_1.NumbersCollection([1, 3, 4, 5, 8, 9, 4, 1, 3, 4, 5, 9, 200]);
nc.ncSorter;
var ll = new LinkedList_1.LinkedList();
ll.add(-900);
ll.add(300);
ll.add(200);
ll.sorter;
ll.print();
