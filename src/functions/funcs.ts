import { Cell } from '../types';

const blueColor = '#03a8f4';

export const getFields = async () => {
	return await fetch('https://demo7919674.mockable.io/').then(
		async (data) => await data.json()
	);
};

export const onMouseOver = (
	row: number,
	col: number,
	selectedCells: Cell[],
	setSelectedCells: Function
) => {
	if (selectedCells.some((el: Cell) => el?.row === row && col === el?.col)) {
		const res = selectedCells.map((el: Cell) => {
			const equal = el.row === row && col === el.col;
			if (equal && el.color === '') {
				el.color = blueColor;
				return el;
			} else if (equal && el.color === blueColor) {
				el.color = '';
				return el;
			}
			return el;
		});
		setSelectedCells(res);
	} else {
		setSelectedCells([...selectedCells, { row, col, color: blueColor }]);
	}
};
