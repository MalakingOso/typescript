 //interfaes create new types
interface Reportable {
  name?: string;
  year?: Date;
  broke?: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broke: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has: ${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.name}`);
  console.log(`Year: ${item.year}`);
  console.log(`Broke: ${item.broke}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
