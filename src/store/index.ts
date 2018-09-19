import { combineReducers, Reducer } from 'redux';
import * as board from './reducer-board';

export interface ReducerState {
	board: board.ReducerState;
}

const reducer: Reducer<ReducerState> = combineReducers<ReducerState>({
	board: board.default,
});

export default reducer;

export const getBoardWidth = (state: ReducerState) => (
	board.getBoardWidth(state.board)
);

export const getBoardHeight = (state: ReducerState) => (
	board.getBoardHeight(state.board)
);
