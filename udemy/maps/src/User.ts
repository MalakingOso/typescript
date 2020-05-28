import faker from 'faker';
import { Mappable } from "./CustomMap"

export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName(1);
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>User Name: ${this.name}</h1> 
    </div>
    `}
}
