import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SampleProject from '/src/views/projects/SampleProject'
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'

const Projects = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);

	return (
		<Grid container>
			<Grid container direction="column" alignItems="center" pt={10} pb={15}
				css={css`color:black;`}>
				<Typography variant="h3" css={css`color:white;`}>PROJECTS</Typography>
				<Grid container css={css`border-bottom:5px solid white;width:70px;`} pt={2} mb={4}></Grid>
				<Grid container direction="column" alignItems="left" p={isMobile?1:0}>
					<SampleProject />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Projects