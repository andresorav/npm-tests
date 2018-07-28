const expect = require('expect');
const utils = require('./utils.js');

it('should add two numbers', () => {
    expect(utils.add(33, 11)).toBe(44).toBeA('number');
});

it('should square a number', () => {
    expect(utils.square(10)).toBe(100).toBeA('number');
});

it('should test some random code', () => {
   expect({name:"kala"}).toEqual({name:"kala"});
   expect({name:"Kala"}).toNotEqual({name:"kala"});
   expect([2, 3, 4]).toInclude(2);
   expect({
       name: "Name",
       age: 33,
       address: "Some random address"
   }).toInclude({
       age: 33
   });
});

it('should verify if first and last name are set', () => {
    var res = utils.setName({}, 'Andres Orav');
    expect(res).toInclude({
        firstName: 'Andres',
        lastName: 'Orav'
    })
});