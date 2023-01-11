import { Grid } from '@mui/material';

const GridContainer = ({
	cells,
	fieldLength,
}: {
	cells: any;
	fieldLength: number;
}) => {
	return (
		<Grid
			container
			style={{
				placeContent: 'center',
				display: 'grid',
				gridTemplateColumns: `repeat(${fieldLength}, 0fr)`,
			}}>
			{cells}
		</Grid>
	);
};

export default GridContainer;
