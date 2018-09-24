import { GridRange } from './grid-range';
import { GridIterator } from './grid-iterator';

export interface ValidatorWarning<T = any> {
	range: GridRange<T>;
	message: string;
}

export class Validator<T = any> {
	private readonly gi: GridIterator<T>;
	private static RUN_COUNT_LIMIT = 2;
	private static ERROR_RUN_COUNT_LIMIT_EXCEEDED = 'No more than two tiles of the same color';
	private static ERROR_MAX_COLOR_COUNT_EXCEEDED = 'Lines have an equal number of each color';
	private static ERROR_LINES_NOT_UNIQUE = 'Lines must be unique';

	constructor (width: number, height: number, grid: T[]) {
		this.gi = new GridIterator<T>(width, height, grid);
	}

	public validate (): ValidatorWarning<T>[] {
		return [
			...this.validateLines(),
			...this.validateUniqueRows(),
			...this.validateUniqueCols(),
		];
	}

	private validateLines (): ValidatorWarning<T>[] {
		const warnings: ValidatorWarning<T>[] = [];
		const lines = this.gi.getLines();
		for (const line of Array.from(lines)) {
			warnings.push(...this.validateLineEqualColor(line));
			warnings.push(...this.validateLineMaxRun(line));
		}
		return warnings;
	}

	private validateUniqueRows (): ValidatorWarning<T>[] {
		const rows = Array.from(this.gi.getRows());
		return this.validateUniqueLines(rows);
	}

	private validateUniqueCols (): ValidatorWarning<T>[] {
		const cols = Array.from(this.gi.getCols());
		return this.validateUniqueLines(cols);
	}

	private validateUniqueLines (lines: GridRange<T>[]): ValidatorWarning<T>[] {
		const warnings: ValidatorWarning<T>[] = [];
		for (let i = 0; i < lines.length - 1; i++) {
			for (let j = i + 1; j < lines.length; j++) {
				if (this.areLinesEqual(lines[i], lines[j])) {
					warnings.push({
						range: GridRange.combineRanges(lines[i], lines[j]),
						message: Validator.ERROR_LINES_NOT_UNIQUE,
					});
				}
			}
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
					message: Validator.ERROR_MAX_COLOR_COUNT_EXCEEDED,
				});
			}
		}
		return warnings;
	}

	private validateLineMaxRun (line: GridRange<T>): ValidatorWarning<T>[] {
		let lastValue: T | null = null;
		let count = 0;
		for (let i = 0; i < line.length; i++) {
			const itemValue = line[i].value;
			if (itemValue === null) {
				// This tile is empty. Reset run.
				lastValue = null;
				count = 0;
				continue;
			}
			if (itemValue !== lastValue) {
				// This tile differs from the last one. Start run.
				lastValue = itemValue;
				count = 1;
				continue;
			}
			// This tile is the same as the last. Increase counter.
			count++;
			if (count > Validator.RUN_COUNT_LIMIT) {
				// Limit is exceeded. Push warning and stop counting.
				return [{
					range: line,
					message: Validator.ERROR_RUN_COUNT_LIMIT_EXCEEDED,
				}];
			}
		}
		return [];
	}

	private areLinesEqual (left: GridRange<T>, right: GridRange<T>): boolean | null {
		const length = left.length;
		if (length !== right.length) {
			throw new Error('Cannot compare lines of differing lengths');
		}
		if (!this.isLineFilled(left) || !this.isLineFilled(right)) {
			// Both lines must be completely filled. Cannot compare.
			return null;
		}
		for (let i = 0; i < length; i++) {
			if (left[i].value !== right[i].value) {
				// Values differ. Lines are not equal.
				return false;
			}
		}
		// Lines must be equal.
		return true;
	}

	private isLineFilled (line: GridRange<T>): boolean {
		for (let i = 0; i < line.length; i++) {
			if (line[i].value === null) {
				return false;
			}
		}
		return true;
	}
}
