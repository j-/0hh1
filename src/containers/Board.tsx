import { connect, MapStateToProps } from 'react-redux';
import Board from '../components/Board';
import { ReducerState, getBoardWidth, getBoardHeight } from '../store';

interface StateProps {
	width: number;
	height: number;
}

interface OwnProps {

}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, ReducerState> = (state) => ({
	width: getBoardWidth(state),
	height: getBoardHeight(state),
});

export default connect(
	mapStateToProps,
)(Board);
