const sum = require('./sum');

// it === test
it('should return 8 if adding 3 and 5', () => {
  // console.log(expect(sum(3,5)));
  expect(sum(3, 5)).toBe(8);
});

xit('should return 15 if adding 7 and 8', () => {
  // console.log(expect(sum(3,5)));
  expect(sum(7, 8)).toBe(15);
});

it('prueba 3', () =>{
  expect(sum(-8,5)).toBe(-3);
});


// agregar x a it significa que no va a testear, va a hacer skip