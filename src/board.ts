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
