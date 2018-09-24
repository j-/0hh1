import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ReducerState, isBoardComplete } from '../store';

interface Props {
	complete: boolean;
}

interface StateProps {
	complete: boolean;
}

const Complete: React.StatelessComponent<Props> = ({ complete }) => (
	complete ? <div className="Complete">You win!</div> : null
);

const mapStateToProps: MapStateToProps<StateProps, void, ReducerState> = (state) => ({
	complete: isBoardComplete(state),
});

export default connect(
	mapStateToProps,
)(Complete);
