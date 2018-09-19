import * as React from 'react';
import Tile, { Props as TileProps } from './Tile';
import './TileEmpty.css';

export interface Props extends TileProps {

}

const TileEmpty: React.StatelessComponent<Props> = (props) => (
	<Tile className="TileEmpty" {...props} />
);

export default TileEmpty;
