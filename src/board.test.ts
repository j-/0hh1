import {
	eachColumn,
	eachRow,
} from './board';

describe('iterators', () => {
	const table = [
		0o00, 0o01, 0o02, 0o03, 0o04, 0o05, 0o06, 0o07,
		0o10, 0o11, 0o12, 0o13, 0o14, 0o15, 0o16, 0o17,
		0o20, 0o21, 0o22, 0o23, 0o24, 0o25, 0o26, 0o27,
		0o30, 0o31, 0o32, 0o33, 0o34, 0o35, 0o36, 0o37,
		0o40, 0o41, 0o42, 0o43, 0o44, 0o45, 0o46, 0o47,
		0o50, 0o51, 0o52, 0o53, 0o54, 0o55, 0o56, 0o57,
		0o60, 0o61, 0o62, 0o63, 0o64, 0o65, 0o66, 0o67,
		0o70, 0o71, 0o72, 0o73, 0o74, 0o75, 0o76, 0o77,
	];
	const width = 8;

	describe('eachRow()', () => {
		it('iterates over columns', () => {
			const iter = jest.fn();
			eachRow(width, table, iter);
			expect(iter.mock.calls[0]).toEqual([[0o00, 0o01, 0o02, 0o03, 0o04, 0o05, 0o06, 0o07]]);
			expect(iter.mock.calls[1]).toEqual([[0o10, 0o11, 0o12, 0o13, 0o14, 0o15, 0o16, 0o17]]);
			expect(iter.mock.calls[2]).toEqual([[0o20, 0o21, 0o22, 0o23, 0o24, 0o25, 0o26, 0o27]]);
			expect(iter.mock.calls[3]).toEqual([[0o30, 0o31, 0o32, 0o33, 0o34, 0o35, 0o36, 0o37]]);
			expect(iter.mock.calls[4]).toEqual([[0o40, 0o41, 0o42, 0o43, 0o44, 0o45, 0o46, 0o47]]);
			expect(iter.mock.calls[5]).toEqual([[0o50, 0o51, 0o52, 0o53, 0o54, 0o55, 0o56, 0o57]]);
			expect(iter.mock.calls[6]).toEqual([[0o60, 0o61, 0o62, 0o63, 0o64, 0o65, 0o66, 0o67]]);
			expect(iter.mock.calls[7]).toEqual([[0o70, 0o71, 0o72, 0o73, 0o74, 0o75, 0o76, 0o77]]);
		});
	});

	describe('eachColumn()', () => {
		it('iterates over columns', () => {
			const iter = jest.fn();
			eachColumn(width, table, iter);
			expect(iter.mock.calls[0]).toEqual([[0o00, 0o10, 0o20, 0o30, 0o40, 0o50, 0o60, 0o70]]);
			expect(iter.mock.calls[1]).toEqual([[0o01, 0o11, 0o21, 0o31, 0o41, 0o51, 0o61, 0o71]]);
			expect(iter.mock.calls[2]).toEqual([[0o02, 0o12, 0o22, 0o32, 0o42, 0o52, 0o62, 0o72]]);
			expect(iter.mock.calls[3]).toEqual([[0o03, 0o13, 0o23, 0o33, 0o43, 0o53, 0o63, 0o73]]);
			expect(iter.mock.calls[4]).toEqual([[0o04, 0o14, 0o24, 0o34, 0o44, 0o54, 0o64, 0o74]]);
			expect(iter.mock.calls[5]).toEqual([[0o05, 0o15, 0o25, 0o35, 0o45, 0o55, 0o65, 0o75]]);
			expect(iter.mock.calls[6]).toEqual([[0o06, 0o16, 0o26, 0o36, 0o46, 0o56, 0o66, 0o76]]);
			expect(iter.mock.calls[7]).toEqual([[0o07, 0o17, 0o27, 0o37, 0o47, 0o57, 0o67, 0o77]]);
		});
	});
});
