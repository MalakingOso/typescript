const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//Type alias, allows us to create tuple below
type Drink = [string, boolean, number];

//this is a TUPLE becaues it has the type definition so it's always in this order
const pepsi: Drink = ['brown', true, 40];
pepsi[0] = 40; //failes beause it's a tuple

const sprite: Drink = ['clear', true, 20];
const tea: Drink = ['brown', false, 4];
