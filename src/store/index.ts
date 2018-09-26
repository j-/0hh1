import { combineReducers, Reducer } from 'redux';
import * as board from './reducer-board';
import * as highlight from './reducer-highlight';

export interface ReducerState {
	board: board.ReducerState;
	highlight: highlight.ReducerState;
}

const reducer: Reducer<ReducerState> = combineReducers<ReducerState>({
	board: board.default,
	highlight: highlight.default,
});

export default reducer;

export const getBoardWidth = (state: ReducerState) => (
	board.getBoardWidth(state.board)
);

export const getBoardHeight = (state: ReducerState) => (
	board.getBoardHeight(state.board)
);

export const getLockedTile = (state: ReducerState, x: number, y: number) => (
	board.getLockedTile(state.board, x, y)
);

export const getPlayerTile = (state: ReducerState, x: number, y: number) => (
	board.getPlayerTile(state.board, x, y)
);

export const getDisplayTile = (state: ReducerState, x: number, y: number) => (
	board.getDisplayTile(state.board, x, y)
);

export const isTileLocked = (state: ReducerState, x: number, y: number) => (
	board.isTileLocked(state.board, x, y)
);

export const isBoardFilled = (state: ReducerState) => (
	board.isBoardFilled(state.board)
);

export const getBoardWarnings = (state: ReducerState) => (
	board.getBoardWarnings(state.board)
);

export const isBoardComplete = (state: ReducerState) => (
	board.isBoardComplete(state.board)
);

export const isTileHighlightedWarning = (state: ReducerState, x: number, y: number) => (
	highlight.isTileHighlightedWarning(state.highlight, x, y)
);
