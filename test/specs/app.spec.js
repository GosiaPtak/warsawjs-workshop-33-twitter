//@ts-check
import  { assert }  from 'chai';

suite('App', () => {
	it('should plus 2 and 2', () => {
		const input = 2 + 2;
		const output = 4;
		assert.equal(input, output);
	});
	it('should plus 3 and 2', () => {
		const input = 3 + 2;
		const output = 5;
		assert.equal(input, output);
	});
});