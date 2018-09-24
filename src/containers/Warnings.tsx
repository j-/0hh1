import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ValidatorWarning } from '../validator';
import { ReducerState, getBoardWarnings } from '../store';

interface Props {
	warnings: ValidatorWarning[];
}

interface StateProps {
	warnings: ValidatorWarning[];
}

const Warnings: React.StatelessComponent<Props> = ({ warnings }) => (
	<ul className="Warnings">
		{warnings.map(({ message }, i) => (
			<li key={i} className="Warnings-warning">
				{message}
			</li>
		))}
	</ul>
);

const mapStateToProps: MapStateToProps<StateProps, void, ReducerState> = (state) => ({
	warnings: getBoardWarnings(state),
});

export default connect(
	mapStateToProps,
)(Warnings);
