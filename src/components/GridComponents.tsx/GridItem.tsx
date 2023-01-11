import { Grid } from '@mui/material';

const GridItem = ({
	color,
	fieldLength,
}: {
	color: string;
	fieldLength: number;
}) => {
	return (
		<Grid
			item
			style={{
				backgroundColor: color,
				border: 'solid black 1px',
				height: fieldLength > 10 ? '50px' : '100px',
				width: fieldLength > 10 ? '50px' : '100px',
			}}
		/>
	);
};

export default GridItem;
