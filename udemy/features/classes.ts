class Vehicle {
  constructor(public color: string = 'red') {}

  protected drive(): void {
    console.log('chugga chugg');
  }

  public honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.honk();

class Car extends Vehicle {
  //no public on color because we don't want to create a field we just want to have a varaible called color
  constructor(public wheels?: number, color?: string) {
    super(color);

  }
  public drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();
car.drive();
car.startDrivingProcess();
