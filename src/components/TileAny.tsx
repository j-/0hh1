import * as React from 'react';
import { Tile } from '../board';
import TileBlue from './TileBlue';
import TileRed from './TileRed';
import TileEmpty from './TileEmpty';

export interface Props {
	type: Tile | null;
}

const TileAny: React.StatelessComponent<Props> = ({ type }) => (
	type === Tile.RED ? <TileRed /> :
	type === Tile.BLUE ? <TileBlue /> :
	<TileEmpty />
);

export default TileAny;
