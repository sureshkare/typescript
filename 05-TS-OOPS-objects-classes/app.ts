class Mobile {
    private brand : string;
    private color : string;
    private price : number;

    constructor(brand: string, color: string, price: number) {
           this.brand = brand;
           this.color = color;
           this.price = price;
    }
}

let mobile = new Mobile("apple", "blue", 23000);
console.log(mobile);