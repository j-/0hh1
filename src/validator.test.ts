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

it('validates that lines to not contain three of the same color', () => {
	const grid = [
		BLUE, null, null, null, null, null,
		BLUE, null, null, null, null, null,
		BLUE, null, null, null, null, null,
		null, BLUE, BLUE, BLUE, null, null,
		null, null, null, null, null, null,
		null, null, null, null, null, null,
	];
	const validator = new Validator(6, 6, grid);
	const warnings = validator.validate();
	expect(warnings).toHaveLength(2);
	expect(warnings[0].message).toBe('No more than two tiles of the same color');
	expect(warnings[0].range).toHaveLength(6);
	expect(warnings[0].range).toHaveProperty('x1', 0);
	expect(warnings[0].range).toHaveProperty('y1', 3);
	expect(warnings[0].range).toHaveProperty('x2', 6);
	expect(warnings[0].range).toHaveProperty('y2', 4);
	expect(warnings[1].message).toBe('No more than two tiles of the same color');
	expect(warnings[1].range).toHaveLength(6);
	expect(warnings[1].range).toHaveProperty('x1', 0);
	expect(warnings[1].range).toHaveProperty('y1', 0);
	expect(warnings[1].range).toHaveProperty('x2', 1);
	expect(warnings[1].range).toHaveProperty('y2', 6);
});

it('validates that lines are unique', () => {
	const grid = [
		BLUE, BLUE, RED, RED,
		RED, RED, null, null,
		RED, RED, null, null,
		BLUE, BLUE, RED, RED,
	];
	const validator = new Validator(4, 4, grid);
	const warnings = validator.validate();
	expect(warnings).toHaveLength(2);
});
