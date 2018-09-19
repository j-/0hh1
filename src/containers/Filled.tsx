import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ReducerState, isBoardFilled } from '../store';

interface Props {
	isFilled: boolean;
}

interface StateProps {
	isFilled: boolean;
}

const Filled: React.StatelessComponent<Props> = ({ isFilled }) => (
	<div>{isFilled ? 'Filled' : 'Not filled'}</div>
);

const mapStateToProps: MapStateToProps<StateProps, void, ReducerState> = (state) => ({
	isFilled: isBoardFilled(state),
});

export default connect(
	mapStateToProps,
)(Filled);
