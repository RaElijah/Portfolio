import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'

const Info = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);

	return (
		<Grid container>
			<Grid container direction="column" alignItems="center"
				css={css`padding-top:${isMobile?'100px':'170px'};color:white;`}>
				<Typography variant={isMobile ? 'h5' : 'h3'}>웹 백엔드 개발자</Typography>
				<Typography variant={isMobile ? 'h5' : 'h3'}>김규석 포트폴리오</Typography>
				<Grid container css={css`border-bottom:5px solid blue;width:70px;`} pt={3} mb={4}></Grid>

				<Grid container direction="column" alignItems={isMobile?'start':'center'}
					css={css`color:#cdcdcd;`} p={isMobile?3:0}>
					<Typography variant={isMobile ? 'body1' : 'h5'}>안녕하세요. ~~~</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Info