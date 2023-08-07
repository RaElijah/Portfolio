import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Info from '/src/views/Info'
import About from '/src/views/About'
import Skills from '/src/views/Skills'
import Link from '/src/views/Link'
import Projects from '/src/views/projects'
import Career from '/src/views/career/index'
import Footer from '/src/views/Footer'
import Grid from '@mui/material/Grid';
import TopButton from '/src/components/topButton';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'

const wrap = css`
	width: 100vw;
`
const content = (props) => css`
	min-width: ${props.isMobile ? '0px' : '1100px'};
	max-width: ${props.isMobile ? '100vw' : '1100px'};
	margin-left: ${props.isMobile ? '0' : 'auto'};
	margin-right: ${props.isMobile ? '0' : 'auto'};
	z-index: 2;
`
const info = css`
	background: url("images/bg2.png");
	background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
	height: 600px;
	width: 100%;
`

function App() {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

  return (
    <div css={wrap}>
      <Grid container direction="column">
        <Grid container css={css`${info};`}>
          <Grid container css={css`${content({isMobile})};`}>
            <Info />
          </Grid>
        </Grid>
        <Grid container css={css`width:100%;`}>
          <Grid container css={content({isMobile})} id="about">
            <About />
          </Grid>
        </Grid>
        <Grid container css={css`width:100%;background-color:#5870f3;`}>
          <Grid container css={content({isMobile})} id="skills">
            <Skills />
          </Grid>
        </Grid>
        <Grid container css={css`width:100%;background-color:#222;`}>
          <Grid container css={content({isMobile})} id="link">
            <Link />
          </Grid>
        </Grid>
        <Grid container css={css`width:100%;background-color:#54acf9;`}>
          <Grid container css={content({isMobile})} id="projects">
            <Projects />
          </Grid>
        </Grid>
        <Grid container css={css`width:100%;background-color:#efefef;`}>
          <Grid container css={content({isMobile})} id="career">
            <Career />
          </Grid>
        </Grid>
        <Grid container css={css`width:100%;background-color:#222;`}>
          <Grid container css={content({isMobile})}>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
      <TopButton />
    </div>
  )
}

export default App
