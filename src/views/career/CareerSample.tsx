import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'
import Carousel from 'react-material-ui-carousel'

const CareerSample = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

  return (
    <Grid container direction="row" alignItems="start">
      <Grid item container xs={isMobile?12:3} p={2} direction="column" alignItems="center">
        <Grid container p={2} mb={1} justifyContent="center"
              css={css`border:1px solid #989898;border-radius:10px;`}>
          <img src="images/beyless_logo4.png" css={css`width:150px;`} alt="beyless" loading="lazy" />
        </Grid>
        <Typography variant="h4" css={css`color:black;`}>회사명</Typography>
        <Typography variant="h6" css={css`color:gray;`}>재직 날짜</Typography>
        <Typography variant="h6" css={css`color:gray;`}>팀이름</Typography>
      </Grid>

      <Grid item container xs={isMobile?12:9} p={2} direction="column" alignItems="center"
            css={css`border-left:1px solid #c4c3c3;`}>
        <Grid container direction="column" alignItems="left">
          <Typography variant="h4">⭐️ 프로젝트명</Typography>
          <Typography variant="h6" pl={2}>► 담당 역할 : 웹 개발 전체(기여도 100%)</Typography>
          <Typography variant="h6" pl={2}>► 업무 기간 : 2023.07 ~ 현재</Typography>
          <Typography variant="h6" pl={2}>► 기술 스택 : Java</Typography>
          <Typography variant="h6" pl={2}>► 업무 내용</Typography>
          <Typography variant="h6" pl={4}>➢ 내용 상세 ~~~~</Typography>
          <Typography variant="h6" pl={4}>➢ 내용 상세 ~~~~</Typography>
        </Grid>

        <Grid container mt={4} direction="column" alignItems="left">
          <Typography variant="h4">⭐️ 프로젝트명</Typography>
          <Typography variant="h6" pl={2}>► 담당 역할 : 웹 개발 전체(기여도 100%)</Typography>
          <Typography variant="h6" pl={2}>► 업무 기간 : 2023.07 ~ 현재</Typography>
          <Typography variant="h6" pl={2}>► 기술 스택 : Java</Typography>
          <Typography variant="h6" pl={2}>► 업무 내용</Typography>
          <Typography variant="h6" pl={4}>➢ 내용 상세 ~~~~</Typography>
          <Typography variant="h6" pl={4}>➢ 내용 상세 ~~~~</Typography>
          {/*<Carousel autoPlay={false} css={css`width:100%;`}>*/}
          {/*  <img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen1.png" alt="usen1" />*/}
          {/*  <img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen2.png" alt="usen2" loading="lazy" />*/}
          {/*  <img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen3.png" alt="usen3" loading="lazy" />*/}
          {/*</Carousel>*/}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CareerSample