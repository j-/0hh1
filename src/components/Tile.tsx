import * as React from 'react';
import * as classNames from 'classnames';
import './Tile.css';

export interface Props {
	className?: string;
	isLocked: boolean;
	showLocked: boolean;
	toggleTile: () => void;
}

const Tile: React.StatelessComponent<Props> = ({ className, isLocked, showLocked, toggleTile }) => (
	<div
		className={classNames('Tile', className, {
			'Tile--is-locked': isLocked,
			'Tile--show-locked': showLocked,
		})}
		onClick={toggleTile}
	/>
);

export default Tile;
