import * as React from 'react';
import * as classNames from 'classnames';
import './Tile.css';

export interface Props {
	className?: string;
}

const Tile: React.StatelessComponent<Props> = (props) => (
	<div
		className={classNames('Tile', props.className)}
	/>
);

export default Tile;
