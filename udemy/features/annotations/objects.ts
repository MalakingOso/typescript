const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age } = profile
//Destrcutured version -- needs the entire type annotation from profile 
//const { age }: {age: number} = profile

//destructured
//const {coords: {lat, long}} : {coords: {lat: number; long: number}} = profile 
//structure
const {coords: {lat, long}} = profile 


coords: {lat}
coords: {long}

