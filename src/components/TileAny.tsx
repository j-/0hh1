import * as React from 'react';
import { TileValue, isTileRed, isTileBlue } from '../board';
import { Props as TileProps } from './Tile';
import TileBlue from './TileBlue';
import TileRed from './TileRed';
import TileEmpty from './TileEmpty';

export interface Props extends TileProps {
	type: TileValue;
}

const TileAny: React.StatelessComponent<Props> = ({ type, ...props }) => (
	isTileRed(type) ? <TileRed {...props} /> :
	isTileBlue(type) ? <TileBlue {...props} /> :
	<TileEmpty {...props} />
);

export default TileAny;
