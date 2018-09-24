import { GridItem } from './grid-item';

export class GridRange<T = any> implements Iterable<GridItem<T>> {
	readonly x1: number;
	readonly y1: number;
	readonly x2: number;
	readonly y2: number;
	readonly length: number;
	[index: number]: GridItem<T>;

	public static combineRanges<T = any> (left: GridRange<T>, right: GridRange<T>): GridRange<T> {
		return new GridRange(
			Math.min(left.x1, right.x1),
			Math.min(left.y1, right.y1),
			Math.min(left.x2, right.x2),
			Math.min(left.y2, right.y2),
			[...Array.from(left), ...Array.from(right)],
		);
	}

	constructor (x1: number, y1: number, x2: number, y2: number, items: GridItem<T>[]) {
		for (let i = 0; i < items.length; i++) {
			Object.defineProperty(this, i, {
				value: items[i],
			});
		}
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.length = items.length;
	}

	public * [Symbol.iterator]() {
		for (let i = 0; i < this.length; i++) {
			yield this[i];
		}
	}
}
