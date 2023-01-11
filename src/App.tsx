import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import FormActions from './components/FormActions';
import { getFields } from './functions/funcs';
import { Cell, Field } from './types';

function App() {
	const [fields, setFields] = useState<Field[]>([]);
	const [field, setField] = useState<Field>({ name: '', field: 0 });
	const [start, setStart] = useState<boolean>(false);
	const [selectedCells, setSelectedCells] = useState<Cell[]>([]);

	useEffect(() => {
		(async () => setFields(await getFields()))();
	}, []);

	return (
		<div className='container'>
			<div>
				<FormActions
					fields={fields}
					field={field}
					setStart={setStart}
					setField={setField}
					setSelectedCells={setSelectedCells}
				/>
				{start && (
					<Board
						selectedCells={selectedCells}
						setSelectedCells={setSelectedCells}
						field={field}
					/>
				)}
			</div>
			<div className={'result-block'}>
				<h2>Hover Squares</h2>
				<ul className='cells-list'>
					{selectedCells.map((cell: Cell, idx: number) => (
						<li className='cell' key={`${cell.row}${cell.col}${idx}`}>
							row {cell.row + 1} col {cell.col + 1}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;

