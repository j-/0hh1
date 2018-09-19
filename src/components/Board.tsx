import * as React from 'react';
import Tile from './Tile';

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
					<Tile type={null} />
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
