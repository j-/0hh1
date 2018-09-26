import { connect, MapStateToProps, MergeProps, MapDispatchToProps } from 'react-redux';
import TileAny, { Props } from '../components/TileAny';
import { TileValue } from '../board';
import { ReducerState, getDisplayTile, isTileLocked, isTileHighlightedWarning } from '../store';
import { toggleTile } from '../store/actions';

interface StateProps {
	type: TileValue;
	isWarning: boolean;
	isLocked: boolean;
	showLocked: boolean;
}

interface DispatchProps {
	toggleTile: () => void;
}

interface OwnProps {
	x: number;
	y: number;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, ReducerState> = (state, { x, y }) => ({
	type: getDisplayTile(state, x, y),
	isWarning: isTileHighlightedWarning(state, x, y),
	isLocked: isTileLocked(state, x, y),
	showLocked: true, // TODO: Store this value
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch, { x, y }) => ({
	toggleTile: () => (
		dispatch(
			toggleTile(x, y)
		)
	),
});

const mergeProps: MergeProps<StateProps, DispatchProps, OwnProps, Props> = (stateProps, dispatchProps) => ({
	...stateProps,
	...dispatchProps,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(TileAny);
