export class User {
  constructor(age) {
    this.age = age;
  }
  get mercury() {
    return this.calcMercury();
  }
  calcMercury() {
    return this.age * .24;
  }
  get venus() {
    return this.calcVenus();
  }
  calcVenus() {
    return this.age * .62;
  }
  get mars() {
    return this.calcMars();
  }
  calcMars() {
    return this.age * 1.88;
  }
  get jupiter() {
    return this.calcJupiter();
  }
  calcJupiter() {
    return this.age * 11.86;
  }

}

export class Life {
  constructor(exercise, smoke, drink, age){
    this.exercise = exercise;
    this.smoke = smoke;
    this.drink = drink;
    this.age = age;
  }
  //--Life Expectancy
  get lifeExp() {
    return this.calcLifeExp();
  }
  calcLifeExp() {
    const avgLife = 78
    return avgLife + this.exercise + this.smoke + this.drink;
  }
  //--Years of Life Left
  get yearsLeft() {
    return this.calcYearsLeft();
  }
  calcYearsLeft() {
    return this.lifeExp - this.age;
  }
  get lifeMessage() {
    return this.calcLifeMessage();
  }
  calcLifeMessage(){
    if (this.yearsLeft <= 0){
      return "you should be dead";
    } else {
      return "you should die in " + this.yearsLeft + " years";
    }
  }
  get lifeMessageMerc() {
    return this.calcLifeMessageMerc();
  }
  calcLifeMessageMerc(){
    if (this.yearsLeft * .24 <= 0){
      return "you should be dead on Mercury";
    } else {
      return "you should die in " + (this.yearsLeft * .24) + " years";
    }
  }
  get lifeMessageVenus() {
    return this.calcLifeMessageVenus();
  }
  calcLifeMessageVenus(){
    if (this.yearsLeft * .62 <= 0){
      return "you should be dead on Venus";
    } else {
      return "you should die in " + (this.yearsLeft * .62) + " years";
    }
  }
  get lifeMessageMars() {
    return this.calcLifeMessageMars();
  }
  calcLifeMessageMars(){
    if (this.yearsLeft * 1.88 <= 0){
      return "you should be dead on Mars";
    } else {
      return "you should die in " + (this.yearsLeft * 1.88) + " years";
    }
  }
  get lifeMessageJupiter() {
    return this.calcLifeMessageJupiter();
  }
  calcLifeMessageJupiter(){
    if (this.yearsLeft * 11.86 <= 0){
      return "you should be dead on Jupiter";
    } else {
      return "you should die in " + (this.yearsLeft * 11.86) + " years";
    }
  }
}


/////notes


// if
// exercise
// a = -2
// b = +2
// c = +4
//
// smoke
// d = +2
// e = -1
// f = -4
//
// drink
// g = -2
// h = +1
// i = +4
// j = -2
