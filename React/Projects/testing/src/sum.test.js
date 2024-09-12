import { sum } from "./sum";

// test('testing sum function: addition of two numbers', () => {
//   expect(sum(10, 20)).toBe(30);
// });

// test('testing sum function: addition of two numbers negative case', () => {
//   expect(sum(10, 20)).not.toBe(20);
// });

describe('Testing sum function', () => {
  it('testing sum function: addition of two numbers', () => {
    expect(sum(10, 20)).toBe(30);
  });

  it('testing sum function: addition of two numbers negative case', () => {
    expect(sum(10, 20)).not.toBe(20);
  });
})