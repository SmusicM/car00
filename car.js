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

//class Car{
//    constructor(Vehicle){
//        this.Vehicle =  Vehicle;
//    }
//    numWheels(){
//        return 4;
//    }
//}

class Car{
    constructor(make, model, year){
        this.Vehicle =  new Vehicle(make,model,year); //this vehicle = a new vehicle class method with the 3 parameters, lets Car use method from vehicle
    }
    numWheels(){
        return 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
//this way works if we call myFirstCar.Vehicle.toString()
//this way also works if myFirstCar.Vehicle.honk()
//myFirstCar.numWheels()
//4

class Car{
    constructor(make, model, year){
        this.Vehicle =  new Vehicle(make,model,year); //this vehicle = a new vehicle class method with the 3 parameters, lets Car use method from vehicle
    }
    numWheels(){
        return 4;
    }
    honk(){
        return this.Vehicle.honk()
    }
    toString(){
        return this.Vehicle.toString()
    }
}  //this wau works to call like intended myFirstCar.toString or .honk() by referencing vehicle class that has the methods and stuff in it at the return

class Car extends Vehicle{
    constructor(make,model,year){
      super(make,model,year);
    }
    numWheels(){
        return 4;
    }
}   //best way using extends and super which acts as this.year this.model etc

class Car extends Vehicle{
    constructor(make,model,year){
      super(make,model,year);                  //could i of done super.toString()
      this.numWheels = 4;
    }
   
} //this works without myFirstCar.numWheels() it works by calling myFirstCar.numWheels



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

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2





//class Garage extends (Car, Motorcycle){
//    constructor(vehicles){
//        for(let cars of (Car,Motorcycle)){
//            if(!vehicles(cars).includes(Car,Motorcycle)){
//                throw new Error("Only Vehicles aloud in here!");
//            }
//        }
//        
//    }
//    add(){
//        return "Vehicle Added!"
//    }
//}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle){
      if(!(newVehicle instanceof Vehicle)){
        return "Only vehicles are allowed in here!"
      }
      if(this.vehicles.length >= this.capacity){
        return "Sorry , we're full."
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!"
    }
}