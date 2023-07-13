import styled from '@emotion/styled';
import bgImgMob from "./images/blured-bg-mob.png"
import bgImgTab from "./images/blured-bg-tab.png"
import bgImgDesk from "./images/blured-bg-desk.png"

export const MainContainer = styled.main`
display: block;
width: 100%;
background: url(${bgImgMob}) no-repeat;
background-position: left -115px bottom -220px;
background-size: 354px 404px;

  @media  (min-width: 768px) {
    background: url(${bgImgTab}) no-repeat;
    background-position: left -190px bottom -175px;
    background-size: 478px 507px;

  }
  @media  (min-width: 1280px) {
    background: url(${bgImgDesk}) no-repeat;
    background-position: left -200px bottom -520px;
    background-size: 917px 1041px;
  }
`
