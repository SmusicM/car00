class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
   honk(){
     return("Beep");
   }
   toString(){
    return(`The vehicle is a ${this.make} ${this.model} from ${this.year} `);
   }
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
//changed from consolelog to return to get back as string
//new Vehicle("chevy","camero",1999)
//Vehicle {make: 'chevy', model: 'camero', year: 1999}

//car class part:

class Car extends Vehicle{
    constructor(make,model,year){
      super(make,model,year);      //could i of done something like super.toString or return super.tostring
      this.numWheels = 4;
    }
   
} //this works without myFirstCar.numWheels() it works by calling myFirstCar.numWheels

let myFirstCar = new Car("Toyota", "Corolla", 2005);

//myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
//myFirstCar.honk();     // "Beep."
//myFirstCar.numWheels;  // 4

//motorcycle class:

class Motorcycle extends Vehicle{ //uses inherit from vehicle and vehicle methods
    constructor(make,model,year){ //3 parameters like before referencing vehicle
       super(make,model,year); //so we dont have to do this. yatata
       this.numWheels = 2;  //this class has 2 wheels
    }
    revEngine(){
        return "VROOM!!!";
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

///myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."
//myFirstMotorcycle.honk();     // "Beep."
//myFirstMotorcycle.revEngine(); // "VROOM!!!"
//myFirstMotorcycle.numWheels;  // 2