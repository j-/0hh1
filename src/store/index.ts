import { combineReducers, Reducer } from 'redux';
import * as board from './reducer-board';

export interface ReducerState {
	board: board.ReducerState;
}

const reducer: Reducer<ReducerState> = combineReducers<ReducerState>({
	board: board.default,
});

export default reducer;
