import { Tile } from './board';
import { Validator } from './validator';

const { RED, BLUE } = Tile;

it('validates that lines do not exceed max color', () => {
	const grid = [
		null, null, RED, null,
		null, null, BLUE, null,
		null, null, RED, null,
		null, null, RED, null,
	];
	const validator = new Validator(4, 4, grid);
	const warnings = validator.validate();
	expect(warnings).toHaveLength(1);
	expect(warnings[0].message).toBe('Lines have an equal number of each color');
	expect(warnings[0].range).toHaveLength(4);
	expect(warnings[0].range).toHaveProperty('x1', 2);
	expect(warnings[0].range).toHaveProperty('y1', 0);
	expect(warnings[0].range).toHaveProperty('x2', 3);
	expect(warnings[0].range).toHaveProperty('y2', 4);
});
