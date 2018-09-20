import { GridIterator } from './grid-iterator';

const values = [
	'foo', 'bar',
	'baz', 'qux',
];
const gi = new GridIterator(2, 2, values);

it('can get items', () => {
	expect(gi.getItem(0, 0)).toEqual({
		x: 0,
		y: 0,
		value: 'foo',
	});
	expect(gi.getItem(1, 0)).toEqual({
		x: 1,
		y: 0,
		value: 'bar',
	});
	expect(gi.getItem(0, 1)).toEqual({
		x: 0,
		y: 1,
		value: 'baz',
	});
	expect(gi.getItem(1, 1)).toEqual({
		x: 1,
		y: 1,
		value: 'qux',
	});
});

it('can get 1x1 range', () => {
	const range = gi.getRange(0, 0, 1, 1);
	expect(range.x1).toBe(0);
	expect(range.y1).toBe(0);
	expect(range.x2).toBe(1);
	expect(range.y2).toBe(1);
	expect(range).toHaveLength(1);
	expect(range[0]).toEqual({
		x: 0,
		y: 0,
		value: 'foo',
	});
});

it('can get 2x1 range', () => {
	const range = gi.getRange(0, 0, 2, 1);
	expect(range.x1).toBe(0);
	expect(range.y1).toBe(0);
	expect(range.x2).toBe(2);
	expect(range.y2).toBe(1);
	expect(range).toHaveLength(2);
	expect(range[0]).toEqual({
		x: 0,
		y: 0,
		value: 'foo',
	});
	expect(range[1]).toEqual({
		x: 1,
		y: 0,
		value: 'bar',
	});
});

it('can get 1x2 range', () => {
	const range = gi.getRange(0, 0, 1, 2);
	expect(range.x1).toBe(0);
	expect(range.y1).toBe(0);
	expect(range.x2).toBe(1);
	expect(range.y2).toBe(2);
	expect(range).toHaveLength(2);
	expect(range[0]).toEqual({
		x: 0,
		y: 0,
		value: 'foo',
	});
	expect(range[1]).toEqual({
		x: 0,
		y: 1,
		value: 'baz',
	});
});

it('can get 2x2 range', () => {
	const range = gi.getRange(0, 0, 2, 2);
	expect(range.x1).toBe(0);
	expect(range.y1).toBe(0);
	expect(range.x2).toBe(2);
	expect(range.y2).toBe(2);
	expect(range).toHaveLength(4);
	expect(range[0]).toEqual({
		x: 0,
		y: 0,
		value: 'foo',
	});
	expect(range[1]).toEqual({
		x: 1,
		y: 0,
		value: 'bar',
	});
	expect(range[2]).toEqual({
		x: 0,
		y: 1,
		value: 'baz',
	});
	expect(range[3]).toEqual({
		x: 1,
		y: 1,
		value: 'qux',
	});
});

it('can get rows', () => {
	const rows = Array.from(gi.getRows());
	expect(rows).toHaveLength(2);
	// Row 0
	expect(rows[0][0].value).toBe('foo');
	expect(rows[0][1].value).toBe('bar');
	// Row 1
	expect(rows[1][0].value).toBe('baz');
	expect(rows[1][1].value).toBe('qux');
});

it('can get cols', () => {
	const cols = Array.from(gi.getCols());
	expect(cols).toHaveLength(2);
	// Col 0
	expect(cols[0][0].value).toBe('foo');
	expect(cols[0][1].value).toBe('baz');
	// Col 1
	expect(cols[1][0].value).toBe('bar');
	expect(cols[1][1].value).toBe('qux');
});

it('can get all lines', () => {
	const lines = Array.from(gi.getLines());
	expect(lines).toHaveLength(4);
	// Row 0
	expect(lines[0][0].value).toBe('foo');
	expect(lines[0][1].value).toBe('bar');
	// Row 1
	expect(lines[1][0].value).toBe('baz');
	expect(lines[1][1].value).toBe('qux');
	// Col 0
	expect(lines[2][0].value).toBe('foo');
	expect(lines[2][1].value).toBe('baz');
	// Col 1
	expect(lines[3][0].value).toBe('bar');
	expect(lines[3][1].value).toBe('qux');
});
