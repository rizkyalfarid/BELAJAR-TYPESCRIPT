class Vehicle {
  merk : string;
  color : string;
  maxSpeed : number;

  constructor(merk : string,  color : string, maxSpeed : number) {
    this.merk = merk;
    this.color = color;
    this.maxSpeed = maxSpeed;
  }
}

class Mobil extends Vehicle {
  wheels : number;
  factory : string
  constructor(merk: string, color: string, maxSpeed: number, wheels: number, factory: string){
    super(merk, color, maxSpeed)
    this.wheels = wheels;
    this.factory = factory;
  }
}

const Hyundai : Mobil = new Mobil("Hyundai", "Silver", 250, 4, "Daihatsu");

console.log(Hyundai);