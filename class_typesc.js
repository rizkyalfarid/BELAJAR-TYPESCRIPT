"use strict";
class Vehicle {
    constructor(merk, color, maxSpeed) {
        this.merk = merk;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
}
class Mobil extends Vehicle {
    constructor(merk, color, maxSpeed, wheels, factory) {
        super(merk, color, maxSpeed);
        this.wheels = wheels;
        this.factory = factory;
    }
}
const Hyundai = new Mobil("Hyundai", "Silver", 250, 4, "Daihatsu");
console.log(Hyundai);
