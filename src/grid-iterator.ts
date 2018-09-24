import { GridItem } from './grid-item';
import { GridRange } from './grid-range';

export class GridIterator<T = any> {
	private readonly width: number;
	private readonly height: number;
	private readonly grid: T[];

	constructor (width: number, height: number, grid: T[]) {
		this.width = width;
		this.height = height;
		this.grid = grid;
	}

	private getIndex (x: number, y: number): number {
		return this.width * y + x;
	}

	public getItem (x: number, y: number): GridItem<T> {
		const index = this.getIndex(x, y);
		const value = this.grid[index];
		return {
			x,
			y,
			value,
		};
	}

	public getRange (x1: number, y1: number, x2: number, y2: number): GridRange<T> {
		const items: GridItem<T>[] = [];
		let i = 0;
		for (let y = y1; y < y2; y++) {
			for (let x = x1; x < x2; x++) {
				const item = this.getItem(x, y);
				items[i] = item;
				i++;
			}
		}
		return new GridRange(
			x1, y1,
			x2, y2,
			items,
		);
	}

	public * getRows (): IterableIterator<GridRange<T>> {
		const { width, height } = this;
		for (let y = 0; y < height; y++) {
			yield this.getRange(0, y, width, y + 1);
		}
	}

	public * getCols (): IterableIterator<GridRange<T>> {
		const { width, height } = this;
		for (let x = 0; x < width; x++) {
			yield this.getRange(x, 0, x + 1, height);
		}
	}

	public * getLines (): IterableIterator<GridRange<T>> {
		for (let row of Array.from(this.getRows())) {
			yield row;
		}
		for (let col of Array.from(this.getCols())) {
			yield col;
		}
	}
}
