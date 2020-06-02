interface Sortable {

  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sort {
  constructor(public collection: Sortable) {}

  sorter() {
    //* I forgot that this should be inside the class, I also forgot that you don't need .length at the end of collection because it has been destructured
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
