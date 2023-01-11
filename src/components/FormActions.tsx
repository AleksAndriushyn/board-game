import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { Field } from '../types';

const FormActions = ({
	fields,
	field,
	setStart,
	setField,
	setSelectedCells,
}: {
	fields: Field[];
	field: Field;
	setStart: Function;
	setField: Function;
	setSelectedCells: Function;
}) => {
	return (
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
								fields.find((el) => el.name === value.target.value)?.field ?? 0,
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
	);
};

export default FormActions;
