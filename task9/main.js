/*
  Sukurkite klasę, kuri priima 4 savybes ir turi 2 metodus.
  Savybės: masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai.
  Metodai:
    1 metodas tikrina ar mašina brangesnė negu 10 000 eurų ir grąžina true|false.
    2 metodas tikrina ar mašina senesnė negu 2010 ir grąžina mašinos amžių ir tekstą "Antikvaras"|"Šviežiena".
*/

class Car {
  constructor(brand, model, price, year) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.year = year;
  }

  isExpensive() {
    return this.price > 10000;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.year;

    if (age > 10) {
      return `${age} metu senumo. Antikvaras.`;
    } else {
      return `${age} beveik nauja. Šviežiena.`;
    }
  }
}

const car1 = new Car("Ford", "Mustang", 15000, 2015);
console.log(car1.isExpensive()); // true
console.log(car1.getAge()); // 7 beveik nauja. Šviežiena.

const car2 = new Car("Toyota", "Corolla", 7000, 2005);
console.log(car2.isExpensive()); // false
console.log(car2.getAge()); // 17 metu senumo. Antikvaras.
