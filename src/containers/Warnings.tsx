import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ValidatorWarning } from '../validator';
import { ReducerState, getBoardWarnings, isBoardFilled } from '../store';

interface Props {
	warnings: ValidatorWarning[];
	showWarnings: boolean;
}

interface StateProps {
	warnings: ValidatorWarning[];
	showWarnings: boolean;
}

const Warnings: React.StatelessComponent<Props> = ({ warnings, showWarnings }) => (
	showWarnings ? (
		<ul className="Warnings">
			{warnings.map(({ message }, i) => (
				<li key={i} className="Warnings-warning">
					{message}
				</li>
			))}
		</ul>
	) : null
);

const mapStateToProps: MapStateToProps<StateProps, void, ReducerState> = (state) => ({
	warnings: getBoardWarnings(state),
	showWarnings: isBoardFilled(state),
});

export default connect(
	mapStateToProps,
)(Warnings);
