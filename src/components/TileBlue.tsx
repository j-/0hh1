import * as React from 'react';
import Tile, { Props as TileProps } from './Tile';
import './TileBlue.css';

export interface Props extends TileProps {

}

const TileBlue: React.StatelessComponent<Props> = (props) => (
	<Tile className="TileBlue" {...props} />
);

export default TileBlue;
