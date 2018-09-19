import * as React from 'react';
import Tile, { Props as TileProps } from './Tile';
import './TileRed.css';

export interface Props extends TileProps {

}

const TileRed: React.StatelessComponent<Props> = (props) => (
	<Tile className="TileRed" {...props} />
);

export default TileRed;
