import * as React from 'react';
import TileAny from '../containers/Tile';

export interface Props {
	width: number;
	height: number;
}

const Board: React.StatelessComponent<Props> = ({ width, height }) => {
	const rows: JSX.Element[] = [];

	for (let y = 0; y < height; y++) {
		const cells: JSX.Element[] = [];

		for (let x = 0; x < width; x++) {
			cells.push(
				<td key={x}>
					<TileAny x={x} y={y} />
				</td>
			);
		}

		rows.push(
			<tr key={y}>
				{cells}
			</tr>
		);
	}

	return (
		<table className="Board">
			<tbody>
				{rows}
			</tbody>
		</table>
	);
};

export default Board;
