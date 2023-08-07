import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CareerSample from '/src/views/career/CareerSample'

const Career = () => {
	return (
		<Grid container>
			<Grid container direction="column" alignItems="center" pt={10} pb={15}
				css={css`color:black;`}>
				<Typography variant="h3" css={css`color:black;`}>Career</Typography>
				<Grid container css={css`border-bottom:5px solid black;width:70px;`} pt={2} mb={4}></Grid>
				<Grid container direction="column" alignItems="left">
					<CareerSample />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Career