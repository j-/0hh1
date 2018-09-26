import { TILE_RED as RED, TILE_BLUE as BLUE, TILE_EMPTY as NONE } from './board';
import { Validator } from './validator';

it('validates that lines do not exceed max color', () => {
	const grid = [
		NONE, NONE, RED, NONE,
		NONE, NONE, BLUE, NONE,
		NONE, NONE, RED, NONE,
		NONE, NONE, RED, NONE,
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
		BLUE, NONE, NONE, NONE, NONE, NONE,
		BLUE, NONE, NONE, NONE, NONE, NONE,
		BLUE, NONE, NONE, NONE, NONE, NONE,
		NONE, BLUE, BLUE, BLUE, NONE, NONE,
		NONE, NONE, NONE, NONE, NONE, NONE,
		NONE, NONE, NONE, NONE, NONE, NONE,
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
		RED, RED, NONE, NONE,
		RED, RED, NONE, NONE,
		BLUE, BLUE, RED, RED,
	];
	const validator = new Validator(4, 4, grid);
	const warnings = validator.validate();
	expect(warnings).toHaveLength(2);
});
