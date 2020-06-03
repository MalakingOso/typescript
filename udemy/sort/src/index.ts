import { CharactersCollection as cc } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sort } from "./Sort";
import { LinkedList } from "./LinkedList";

const charactersCollection = new cc("Xabby");
charactersCollection.ccSorter;

const nc = new NumbersCollection([1, 3, 4, 5, 8, 9, 4, 1, 3, 4, 5, 9, 200]);
nc.ncSorter;

const ll = new LinkedList();
ll.add(-900);
ll.add(300);
ll.add(200);
ll.sorter
ll.print()
