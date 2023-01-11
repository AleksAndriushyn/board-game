import { onMouseOver } from '../functions/funcs';
import { Cell, Field } from '../types';
import GridContainer from './GridComponents.tsx/GridContainer';
import GridItem from './GridComponents.tsx/GridItem';

const Board = ({
	field,
	selectedCells,
	setSelectedCells,
}: {
	field: Field;
	selectedCells: Cell[];
	setSelectedCells: Function;
}) => {
	const cells: any = [];
	for (let row = 0; row < field.field; row++) {
		cells.push([]);
		for (let col = 0; col < field.field; col++) {
			cells[row].push(
				<div
					key={`${row}${col}`}
					onMouseOver={() =>
						onMouseOver(row, col, selectedCells, setSelectedCells)
					}>
					<GridItem
						color={
							selectedCells.find(
								(el: Cell) => el?.row === row && el?.col === col
							)?.color ?? ''
						}
						fieldLength={field.field}
					/>
				</div>
			);
		}
	}

	return <GridContainer cells={cells} fieldLength={field.field} />;
};

export default Board;
