import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'

const item = css`
	border-radius: 10px;
	background-color:white;
	box-shadow: 4px 4px 5px 4px rgba(70,70,70,0.2);
	color: #837df6;
`
const url = css`
  cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`

const SampleProject = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

  return (
    <Grid container p={isMobile?2:3} mb={4} css={item} direction="column" alignItems="center">
      <Typography variant="h4" css={css`color:black;`}>프로젝트명</Typography>
      <Typography variant="h6" css={css`color:gray;`}>날짜</Typography>
      <Grid mt={2} container direction="row" alignItems="start">
        <Grid item container xs={isMobile?12:6} pr={isMobile?0:1}>
          {/*<Carousel autoPlay={false} css={css`width:100%;`}>*/}
          {/*  <img css={css`width:100%;height:${isMobile?'250px':'350px'};`} src="images/port1.png" alt="port1" />*/}
          {/*  <img css={css`width:100%;height:${isMobile?'250px':'350px'};`} src="images/port2.png" alt="port2" loading="lazy" />*/}
          {/*  <img css={css`width:100%;height:${isMobile?'250px':'350px'};`} src="images/port3.png" alt="port3" loading="lazy" />*/}
          {/*  <img css={css`width:100%;height:${isMobile?'250px':'350px'};`} src="images/port4.png" alt="port4" loading="lazy" />*/}
          {/*</Carousel>*/}
        </Grid>
        <Grid item container xs={isMobile?12:6} pl={isMobile?0:1} direction="column" css={css`color:black;`}>
          <Grid container pb={1} direction="row" alignItems="center">
            <Grid item container xs={isMobile?12:3} alignItems="center">
              <TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
              <Typography variant="h6">GitHub</Typography>
            </Grid>
            <Grid item container xs={isMobile?12:9}
                  onClick={() => window.open('https://github.com/RaElijah/Portfolio', '_blank')}>
              <Typography variant="body1" css={css`color:blue;${url};`}>
                {'https://github.com/RaElijah/Portfolio'}
              </Typography>
            </Grid>
          </Grid>
          <Grid container pb={1} direction="row" alignItems="center">
            <Grid item container xs={isMobile?12:3} alignItems="center">
              <TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
              <Typography variant="h6">URL</Typography>
            </Grid>
            <Grid item container xs={isMobile?12:9}
                  onClick={() => window.open('', '_blank')}>
              <Typography variant="body1" css={css`color:blue;${url};`}>
                {''}
              </Typography>
            </Grid>
          </Grid>
          <Grid container pb={1} direction="row" alignItems="start">
            <Grid item container xs={isMobile?12:3} alignItems="center">
              <TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
              <Typography variant="h6">기술스택</Typography>
            </Grid>
            <Grid item container xs={isMobile?12:9}>
              <Typography variant="h6">Java</Typography>
            </Grid>
          </Grid>
          <Grid container pb={1} direction="row" alignItems="start">
            <Grid item container xs={isMobile?12:3} alignItems="center">
              <TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
              <Typography variant="h6">주요기능</Typography>
            </Grid>
            <Grid item container xs={isMobile?12:9}>
              <Typography variant="h6">자기소개</Typography>
            </Grid>
          </Grid>
          <Grid container css={css`border-bottom:1px solid gray;`} mb={1}></Grid>
          <Typography variant="h6">프로젝트 내용/설명</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SampleProject