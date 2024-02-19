const Cars = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

const bmw = new Cars("BMW", 150);

Cars.prototype.accelarate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Cars.prototype.brake = function () {
  console.log(this.speed - 5);
};

bmw.accelarate();
bmw.accelarate();
bmw.accelarate();
bmw.accelarate();
bmw.accelarate();
bmw.brake();

const Mercedes = new Cars("Mercedes", 95);
Mercedes.accelarate();
Mercedes.brake();

class CarCl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelarate = function () {
    this.speed = this.speed + 10;
    console.log(this.speed);
  };

  brake = function () {
    console.log(this.speed - 5);
  };

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelarate();
ford.speedUS = 50;
console.log(ford);

// Challenge 3
const CarsChallenge = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

CarsChallenge.prototype.accelarate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

CarsChallenge.prototype.brake = function () {
  console.log(this.speed - 5);
};

const EV = function (name, speed, charge) {
  CarsChallenge.call(this, name, speed);
  this.charge = charge;
};

EV.prototype = Object.create(CarsChallenge.prototype);
EV.prototype.charging = function () {
  console.log("Charging");
};

console.log(CarsChallenge.prototype);
const tesla = new EV("Tesla", 120, 23);
console.log(tesla);
console.log(EV.prototype);
tesla.accelarate();
tesla.charge = 50;
console.log(tesla);
