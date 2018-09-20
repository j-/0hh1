import { GridRange, GridIterator } from './grid-iterator';

export interface ValidatorWarning<T = any> {
	range: GridRange<T>;
	message: string;
}

export class Validator<T = any> {
	private readonly gi: GridIterator<T>;

	constructor (width: number, height: number, grid: T[]) {
		this.gi = new GridIterator<T>(width, height, grid);
	}

	public validate (): ValidatorWarning<T>[] {
		return [
			...this.validateLines(),
		];
	}

	private validateLines (): ValidatorWarning<T>[] {
		const warnings: ValidatorWarning<T>[] = [];
		const lines = this.gi.getLines();
		for (const line of Array.from(lines)) {
			warnings.push(...this.validateLineEqualColor(line));
		}
		return warnings;
	}

	private validateLineEqualColor (line: GridRange<T>): ValidatorWarning<T>[] {
		const warnings: ValidatorWarning<T>[] = [];
		const { length } = line;
		const maxSame = length / 2;
		const counts = new Map();
		for (const item of Array.from(line)) {
			const { value } = item;
			if (value === null) {
				// Ignore empty tiles
				continue;
			} else if (!counts.has(value)) {
				// This is the first time we have seen this color
				counts.set(value, 1);
			} else {
				// Increment the counter for this color
				counts.set(value, counts.get(value) + 1);
			}
		}
		for (const count of Array.from(counts.values())) {
			if (count > maxSame) {
				warnings.push({
					range: line,
					message: 'Lines have an equal number of each color',
				});
			}
		}
		return warnings;
	}
}
