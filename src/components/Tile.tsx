import * as React from 'react';
import * as classNames from 'classnames';
import './Tile.css';

export interface Props {
	className?: string;
	isWarning: boolean;
	isLocked: boolean;
	showLocked: boolean;
	toggleTile: () => void;
}

const Tile: React.StatelessComponent<Props> = ({ className, isWarning, isLocked, showLocked, toggleTile }) => (
	<div
		className={classNames('Tile', className, {
			'Tile--is-warning': isWarning,
			'Tile--is-locked': isLocked,
			'Tile--show-locked': showLocked,
		})}
		onClick={toggleTile}
	/>
);

export default Tile;
