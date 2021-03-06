import { User } from './../src/agecalculator.js';
import { Life } from './../src/agecalculator.js';
// import { avgLife } from './../src/agecalculator.js';

describe('Ages', () => {

  test('should correctly create a User object with one input', () => {
    let person = new User(100);
    expect(person.age).toEqual(100);
  });
  test('should correctly create an age on Mercury', () => {
  let person1 = new User(100);
  expect(person1.mercury).toEqual(24);
  });
  test('should correctly create an age on Venus', () => {
  let person1 = new User(100);
  expect(person1.venus).toEqual(62);
  });
  test('should correctly create an age on Mars', () => {
  let person1 = new User(100);
  expect(person1.mars).toEqual(188);
  });
  test('should correctly create an age on Jupiter', () => {
  let person1 = new User(100);
  expect(person1.jupiter).toEqual(1186);
  });
});

describe('Life Expectancy', () => {

  test("should correctly add values to const avgLife's value of 78", () => {
    let life1 = new Life(0, 0, 0);
    expect(life1.lifeExp).toEqual(78);
  });
  test("should correctly add values to const avgLife's value of 78", () => {
    let life1 = new Life(2, 5, 0);
    expect(life1.lifeExp).toEqual(85);
  });
  test("should correctly determine years left with user age and life properties", () => {
    let life1 = new Life(2, 5, 0, 10);
    expect(life1.yearsLeft).toEqual(75);
  });
  test("life message should tell you if you should already be dead", () => {
    let life1 = new Life(2, 5, 0, 90);
    expect(life1.lifeMessage).toEqual("you should be dead");
  });
  test("life message should correctly tell you how many years you have left to live based on your life expectancy", () => {
    let life1 = new Life(2, 5, 0, 80);
    expect(life1.lifeMessage).toEqual("you should die in 5 years");
  });
  test("life message Mercury should tell you if you should be dead on Mercury already", () => {
    let life1 = new Life(2, 5, 0, 90);
    expect(life1.lifeMessageMerc).toEqual("you should be dead on Mercury");
  });
  test("life message Mercury should correctly tell you how many years you have left to live based on your life expectancy on Mercury", () => {
    let life1 = new Life(2, 5, 0, 80);
    expect(life1.lifeMessageMerc).toEqual("you should die in 1.2 years");
  });
  test("life message Venus should tell you if you should be dead on Venus already", () => {
    let life1 = new Life(2, 5, 0, 90);
    expect(life1.lifeMessageVenus).toEqual("you should be dead on Venus");
  });
  test("life message Venus should correctly tell you how many years you have left to live based on your life expectancy on Venus", () => {
    let life1 = new Life(2, 5, 0, 50);
    expect(life1.lifeMessageVenus).toEqual("you should die in 21.7 years");
  });
  test("life message Mars should tell you if you should be dead on Mars already", () => {
    let life1 = new Life(2, 5, 0, 90);
    expect(life1.lifeMessageMars).toEqual("you should be dead on Mars");
  });
  test("life message Mars should correctly tell you how many years you have left to live based on your life expectancy on Mars", () => {
    let life1 = new Life(2, 5, 0, 50);
    expect(life1.lifeMessageMars).toEqual("you should die in 65.8 years");
  });
  test("life message Jupiter should tell you if you should be dead on Jupiter already", () => {
    let life1 = new Life(2, 5, 0, 90);
    expect(life1.lifeMessageJupiter).toEqual("you should be dead on Jupiter");
  });
  test("life message Jupiter should correctly tell you how many years you have left to live based on your life expectancy on Jupiter", () => {
    let life1 = new Life(2, 5, 0, 22);
    expect(life1.lifeMessageJupiter).toEqual("you should die in 747.18 years");
  });
});
