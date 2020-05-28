const carMakers: string[] = ['ford', 'toyota', 'chevy'];
//only need annotation when initializing an empy array
const emptyArray: string[] = [];

const date = [new Date(), new Date()];

const carsByMake = [['mustang'], ['corolla'], ['camaro']];

//help w/ inference when extracting values
const car: string = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push(100); //throws an error 

// Help w/ 'map'
carMakers.map((car: string): string =>{
    return car;
})

//? Can you only do arrow functions when calling map? 
carsByMake.map((x:string[]): string[] =>{
    return x; 
})

//flexible types 
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];

importantDates.push('2030-10-12')
importantDates.push(new Date())

