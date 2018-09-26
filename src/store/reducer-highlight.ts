import { Reducer } from 'redux';
import { TilePosition } from '../board';
import { isActionSetWarningTiles } from './actions';

export interface ReducerState {
	warningTilePositions: TilePosition[];
}

const DEFAULT_STATE: ReducerState = {
	warningTilePositions: [],
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetWarningTiles(action)) {
		return {
			...state,
			warningTilePositions: [...action.data.positions],
		};
	}

	return state;
};

export default reducer;

/** Is the tile at the given (x, y) coordinate highlighted as a warning? */
export const isTileHighlightedWarning = (state: ReducerState, x: number, y: number) => (
	state.warningTilePositions.some((position) => (
		position.x === x &&
		position.y === y
	))
);
