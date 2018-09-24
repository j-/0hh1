import { GridItem } from './grid-item';

export class GridRange<T = any> implements Iterable<GridItem<T>> {
	readonly x1: number;
	readonly y1: number;
	readonly x2: number;
	readonly y2: number;
	readonly length: number;
	[index: number]: GridItem<T>;

	constructor (x1: number, y1: number, x2: number, y2: number, items: GridItem<T>[]) {
		Object.assign(this, items);
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
