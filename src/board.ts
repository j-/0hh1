export enum Tile {
	RED = 'red',
	BLUE = 'blue',
}

/** Returns the next tile in the sequence when toggling. */
export const getNextTile = (tile: Tile | null): Tile | null => (
	tile === Tile.RED ? Tile.BLUE :
	tile === Tile.BLUE ? null :
	Tile.RED
);

/** Returns `true` if no positions on the board are empty. */
export const isBoardFilled = (tiles: Array<Tile | null>) => {
	for (let i = 0; i < tiles.length; i++) {
		if (tiles[i] === null) {
			return false;
		}
	}
	return true;
};

export const eachRow = <T = any>(width: number, tiles: T[], iter: (tiles: T[]) => void) => {
	const { length } = tiles;
	for (let i = 0; i < length / width; i++) {
		const start = i * width;
		const end = start + width;
		const slice = tiles.slice(start, end);
		iter(slice);
	}
};

export const eachColumn = <T = any>(width: number, tiles: T[], iter: (tiles: T[]) => void) => {
	const { length } = tiles;
	for (let x = 0; x < width; x++) {
		const slice = [];
		for (let y = 0; y < length / width; y++) {
			slice.push(tiles[x + y * width]);
		}
		iter(slice);
	}
};

export const countTiles = (tiles: Array<Tile | null>, type: Tile | null) => (
	tiles.filter((tile) => tile === type).length
);

export const countEmpty = (tiles: Array<Tile | null>) => (
	countTiles(tiles, null)
);

export const countRed = (tiles: Array<Tile | null>) => (
	countTiles(tiles, Tile.RED)
);

export const countBlue = (tiles: Array<Tile | null>) => (
	countTiles(tiles, Tile.BLUE)
);
