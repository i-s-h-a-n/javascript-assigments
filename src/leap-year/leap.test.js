import isLeap from "./leap";

/// this keyword

// describe('park',() => {
//   describe("full notifiaction",function (){
//
//   })
// });

describe('A leap year', () => {-
  test('year not divisible by 4 in common year', () => {
    expect(isLeap(2015)).toBe(false);
  });
  test('year divisible by 4',()=>{
    expect(isLeap(2020)).toBe(true);
  })
  test("is 1000  leap year",()=>{
    expect(isLeap(1000)).toBe(false)
  })
  test("is 4 a leap year",()=>{
    expect(isLeap(4)).toBe(true);
  })
  test("is 2100 a leap year",()=>{
    expect(isLeap(2100)).toBe(false);
  })
});
