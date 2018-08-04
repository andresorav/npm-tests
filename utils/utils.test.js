const expect = require('expect');
const utils = require('./utils.js');

describe('Utils tests', () => {
    describe('Add two numbers', () => {
        it('should add two numbers', () => {
            expect(utils.add(33, 11)).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(2, 3, (sum) => {
                expect(sum).toBe(5).toBeA('number');
                done();
            });
        });
    });

    describe('Square a number', () => {
        it('should square a number', () => {
            expect(utils.square(10)).toBe(100).toBeA('number');
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(5, (sum) => {
                expect(sum).toBe(25).toBeA('number');
                done();
            });
        });
    });

    describe('Random tests', () => {
        it('should test some random code', () => {
            expect({name: "kala"}).toEqual({name: "kala"});
            expect({name: "Kala"}).toNotEqual({name: "kala"});
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
            var res = utils.setName({
                location: 'Tallinn'
            }, 'Andres Orav');
            expect(res).toInclude({
                firstName: 'Andres',
                lastName: 'Orav',
                location: 'Tallinn'
            })
        });
    });
});