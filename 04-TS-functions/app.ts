let greet = (name:string): void => {
    let msg:string = `Hello ${name}`;
    console.log(msg);
}
greet("Suresh");

//function with return type

let add = (a:number, b:number):number => {
     let sum:number = a + b ;
     return sum;
}
let output:number = add(2, 5);
console.log(output);

//a function with object as a parameter

interface Mobile {
    brand: string;
    color: string;
    price: number;
}

let printMobile = (mobile:Mobile):void => {
    console.log(JSON.stringify(mobile));
}

let mobileOne:Mobile = {
    brand: "apple",
    color: "blue",
    price: 35000
}

printMobile(mobileOne);