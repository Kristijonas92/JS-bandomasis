/*
  Parašyti JS kodą, kuris turėtų funkciją.
  Funkcija kaip argumentą priima masyvą. Funkcija grąžina skaičių.
  Funkcija turi suskaičiuoti, koks yra vartotojų mašinų gamybos metų vidurkis.
*/

const asmenys = [
  { id: '1', name: 'Petras', masina: "Ford", masinosGamybosMetai: 1990},
  { id: '2', name: 'Jonas', masina: "Audi", masinosGamybosMetai: 1995 },
  { id: '3', name: 'Rokas', masina: "Fiat", masinosGamybosMetai: 2001 },
  { id: '4', name: 'Tomas', masina: "Peugeot", masinosGamybosMetai: 2005 },
  { id: '5', name: 'Sima', masina: "Audi", masinosGamybosMetai: 1996 },
  { id: '6', name: 'Kamilė', masina: "BMW", masinosGamybosMetai: 1999 },
  { id: '7', name: 'Aloyzas', masina: "Honda", masinosGamybosMetai: 2010 }
];

class MachineYearCalculator {
  constructor(machines) {
    this.machines = machines;
  }

  calculateAverageYear() {
    // Check if the array is empty
    if (this.machines.length === 0) {
      return 0;
    }

    // Initialize the total year and the number of machines
    let totalYear = 0;
    let numMachines = 0;

    // Loop through the array of machines
    for (let machine of this.machines) {
      // Check if the machine has a masinosGamybosMetai property
      if (machine.masinosGamybosMetai) {
        // Add the year to the total year and increment the number of machines
        totalYear += machine.masinosGamybosMetai;
        numMachines++;
      }
    }

    // Calculate the average year
    const averageYear = totalYear / numMachines;

    // Return the average year
    return averageYear;
  }
}

const calculator = new MachineYearCalculator(asmenys);
const averageYear = calculator.calculateAverageYear();
console.log(averageYear);