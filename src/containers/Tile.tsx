import { connect, MapStateToProps, MergeProps } from 'react-redux';
import TileAny, { Props } from '../components/TileAny';
import { Tile as TileType } from '../board';
import { ReducerState, getDisplayTile } from '../store';

interface StateProps {
	type: TileType | null;
}

interface OwnProps {
	x: number;
	y: number;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, ReducerState> = (state, { x, y }) => ({
	type: getDisplayTile(state, x, y),
});

const mergeProps: MergeProps<StateProps, void, OwnProps, Props> = (stateProps) => ({
	...stateProps,
});

export default connect(
	mapStateToProps,
	null,
	mergeProps,
)(TileAny);
