import {HEROES} from './mock-heroes';
describe('Hero', () => {
	it('has name lengthof 10', () => {
		expect(HEROES.length).toEqual(10);
	});

})