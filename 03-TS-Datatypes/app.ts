/*
   string, number, boolean, null, undefined,object, array, void, enum, any
*/

//string

let employeeName:string = 'Suresh';
console.log(`Employee Name: ${employeeName}`);

//number
let employeeAge:number = 25;
console.log(`Employee Age: ${employeeAge}`);

//boolean
let isManager:boolean = true;
console.log(`isManager: ${isManager}`);

//null
let test:null = null;
console.log(`Test: ${test}`);

//undefined

let projectName:undefined = undefined;
console.log(`Project Name: ${projectName}`);

//object
let profile:Object = {
    name: "Suresh",
    age: 25
}

//array
let colors:string[] = ['black', 'blue', 'white']
console.log(`Colors: ${colors}`)

//void-- It is used when function returns nothing
let greet = (name:string):void => {
      console.log(`Hello ${name}`);
}
greet("Suresh");

//Enum
enum Month {
    JAN = 'JANUARY',
    FEB = 'FEBRUARY'
}
console.log(`Month: ${Month.JAN}`);

//any

let a:any = 'suresh';
console.log(a);