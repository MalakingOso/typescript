import { CharactersCollection as cc } from "./CharactersCollection";
import { Sort } from "./Sort";

const charactersCollection = new cc("Berkley");
const sort = new Sort(charactersCollection);
sort.sorter()
console.log(charactersCollection.data);