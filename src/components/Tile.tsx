import * as React from 'react';
import { Tile as TileType } from '../board';
import TileBlue from './TileBlue';
import TileRed from './TileRed';
import TileEmpty from './TileEmpty';

export interface Props {
	type: TileType | null;
}

const Tile: React.StatelessComponent<Props> = ({ type }) => (
	type === TileType.RED ? <TileRed /> :
	type === TileType.BLUE ? <TileBlue /> :
	<TileEmpty />
);

export default Tile;
