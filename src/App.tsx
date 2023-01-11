import { Button, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import { getFields } from './functions/funcs';
import { Field, Cell } from './types';

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
				<div className='actions'>
					<FormControl>
						<InputLabel>Pick mode</InputLabel>
						<Select
							style={{ width: '170px' }}
							value={field.name ?? ''}
							label='Pick mode'
							onChange={(value) => {
								setField({
									field:
										fields.find((el) => el.name === value.target.value)
											?.field ?? 0,
									name: value.target.value,
								});
								setStart(false);
								setSelectedCells([]);
							}}>
							{fields.map((field: Field) => (
								<MenuItem key={field.field} value={field.name}>
									{field.name} ({field.field}x{field.field})
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button variant={'contained'} onClick={() => setStart(true)}>
						Start
					</Button>
				</div>
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
							row {cell.row} col {cell.col}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;


