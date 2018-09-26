export type TileRed = 'red';

export const TILE_RED: TileRed = 'red';

export type TileBlue = 'blue';

export const TILE_BLUE: TileBlue = 'blue';

export type TileEmpty = null;

export const TILE_EMPTY: TileEmpty = null;

export type TileValue = TileRed | TileBlue | TileEmpty;

export const isTileRed = (tile: TileValue): tile is TileRed => tile === TILE_RED;

export const isTileBlue = (tile: TileValue): tile is TileBlue => tile === TILE_BLUE;

export const isTileEmpty = (tile: TileValue): tile is TileEmpty => tile === TILE_EMPTY;

export interface TilePosition {
	x: number;
	y: number;
}

/** Returns the next tile in the sequence when toggling. */
export const getNextTile = (tile: TileValue): TileValue => (
	isTileRed(tile) ? TILE_BLUE :
	isTileBlue(tile) ? TILE_EMPTY :
	TILE_RED
);

/** Returns `true` if no positions on the board are empty. */
export const isBoardFilled = (tiles: TileValue[]) => {
	for (let i = 0; i < tiles.length; i++) {
		if (tiles[i] === null) {
			return false;
		}
	}
	return true;
};
