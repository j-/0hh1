export enum Tile {
	RED = 'red',
	BLUE = 'blue',
}

export interface TilePosition {
	x: number;
	y: number;
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
