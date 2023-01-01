/*
  Surkite klasę "trueFalse", kuri turi 4 metodus:
    metodas1 priima skaičių ir grąžina true jei skaičius didesnis už 100 ir false kitu atveju.
    metodas2 priima žodį ir grąžina true jeigu jis prasideda didžiąja raide ir false kitu atveju.
    metodas3 priima skaičių ir grąžina true jeigu šis yra lyginis ir false kitu atveju.
    metodas4 priima žodį ir grąžina true jeigu šis yra ilgesnis nei 8 raidžių ir false kitu atveju.
*/

class trueFalse {
  method1(num) {
    if (num > 100) {
      return true;
    } else {
      return false;
    }
  }

  method2(word) {
    if (word[0].toUpperCase() === word[0]) {
      return true;
    } else {
      return false;
    }
  }

  method3(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  method4(word) {
    if (word.length > 8) {
      return true;
    } else {
      return false;
    }
  }
}

const tf = new trueFalse();
console.log(tf.method1(150));  // prints true
console.log(tf.method2("Hello"));  // prints true
console.log(tf.method3(4));  // prints true
console.log(tf.method4("supercalifragilisticexpialidocious"));  // prints true
