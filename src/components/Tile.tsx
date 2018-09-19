import * as React from 'react';
import * as classNames from 'classnames';
import './Tile.css';

export interface Props {
	className?: string;
	isLocked: boolean;
	showLocked: boolean;
}

const Tile: React.StatelessComponent<Props> = ({ className, isLocked, showLocked }) => (
	<div
		className={classNames('Tile', className, {
			'Tile--is-locked': isLocked,
			'Tile--show-locked': showLocked,
		})}
	/>
);

export default Tile;
