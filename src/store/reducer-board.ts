import { Reducer } from 'redux';
import { Tile } from '../board';

const { RED, BLUE } = Tile;

export interface ReducerState {
	width: number;
	height: number;
	locked: Array<Tile | null>;
	user: Array<Tile | null>;
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
	user: [],
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	return state;
};

export default reducer;

export const getBoardWidth = (state: ReducerState) => (
	state.width
);

export const getBoardHeight = (state: ReducerState) => (
	state.height
);
