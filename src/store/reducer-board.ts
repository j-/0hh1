import { Reducer } from 'redux';
import { Tile, getNextTile } from '../board';
import { isActionToggleTile } from './actions';

const { RED, BLUE } = Tile;

export interface ReducerState {
	width: number;
	height: number;
	locked: Array<Tile | null>;
	player: Array<Tile | null>;
}

export const DEFAULT_STATE: ReducerState = {
	width: 4,
	height: 4,
	locked: [
		null, null, BLUE, RED,
		BLUE, null, null, null,
		null, BLUE, BLUE, null,
		null, null, null, null,
	],
	player: [
		null, null, null, null,
		null, null, null, null,
		RED, null, null, RED,
		null, null, null, null,
	],
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionToggleTile(action)) {
		const { x, y } = action.data;
		const index = getTileIndex(state, x, y);
		const tile = getPlayerTile(state, x, y);
		const nextTile = getNextTile(tile);
		const player = [...state.player];
		player[index] = nextTile;
		return {
			...state,
			player,
		};
	}

	return state;
};

export default reducer;

export const getBoardWidth = (state: ReducerState) => (
	state.width
);

export const getBoardHeight = (state: ReducerState) => (
	state.height
);

/** Convert (x, y) coordinates to a tile index (between `0` and `x * y`). */
const getTileIndex = (state: ReducerState, x: number, y: number) => (
	state.width * y + x
);

/** Get the tile as it was generated by the game. */
export const getLockedTile = (state: ReducerState, x: number, y: number) => (
	state.locked[
		getTileIndex(state, x, y)
	]
);

/** Get the tile as it has been entered by the player. */
export const getPlayerTile = (state: ReducerState, x: number, y: number) => (
	state.player[
		getTileIndex(state, x, y)
	]
);

/** Returns the tile type (or `null`) whether the tile is locked or not. */
export const getDisplayTile = (state: ReducerState, x: number, y: number) => (
	getLockedTile(state, x, y) ||
	getPlayerTile(state, x, y)
);

/** Returns `true` if the tile is locked and cannot be changed by the player. */
export const isTileLocked = (state: ReducerState, x: number, y: number) => (
	getLockedTile(state, x, y) !== null
);

/** Returns `true` if no positions on the board are empty. */
export const isBoardFilled = (state: ReducerState) => {
	const { width, height, player, locked } = state;
	const length = width * height;
	for (let i = 0; i < length; i++) {
		if (
			player[i] === null &&
			locked[i] === null
		) {
			return false;
		}
	}
	return true;
};
