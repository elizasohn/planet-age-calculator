import { User } from './../src/agecalculator.js';

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
