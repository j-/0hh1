import * as React from 'react';
import { Tile } from '../board';
import { Props as TileProps } from './Tile';
import TileBlue from './TileBlue';
import TileRed from './TileRed';
import TileEmpty from './TileEmpty';

export interface Props extends TileProps {
	type: Tile | null;
}

const TileAny: React.StatelessComponent<Props> = ({ type, ...props }) => (
	type === Tile.RED ? <TileRed {...props} /> :
	type === Tile.BLUE ? <TileBlue {...props} /> :
	<TileEmpty {...props} />
);

export default TileAny;
