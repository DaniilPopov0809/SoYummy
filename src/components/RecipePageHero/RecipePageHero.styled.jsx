import styled from '@emotion/styled';

import hero_desk_1 from '../../images/recipePageImg/recipe_hero_desk@1x.jpg';
import hero_desk_2 from '../../images/recipePageImg/recipe_hero_desk@2x.jpg';
import hero_tab_1 from '../../images/recipePageImg/recipe_hero_tab@1x.jpg';
import hero_tab_2 from '../../images/recipePageImg/recipe_hero_tab@2x.jpg';
import hero_mob_1 from '../../images/recipePageImg/recipe_hero_mob@1x.jpg';
import hero_mob_2 from '../../images/recipePageImg/recipe_hero_mob@2x.jpg';

import { ReactComponent as Clock } from '../../images/icons/clock.svg';

export const HeroContainer = styled.div`
  background-image: url(${hero_mob_1});

  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 455px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${hero_mob_2});
  }

  @media screen and (min-width: 768px) {
    height: 495px;
    -webkit-background-size: 100%;
    background-image: url(${hero_tab_1});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${hero_tab_2});
    }
  }

  @media screen and (min-width: 1280px) {
    height: 493px;
    background-size: 100%;
    background-position-y: 20%;
    background-image: url(${hero_desk_1});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${hero_desk_2});
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 18px;
  margin-top: 80px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${({ theme }) => theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 1;
    margin-bottom: 24px;
    margin-top: 72px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 100px;
  }
`;

export const HeroText = styled.p`
  color: ${({ theme }) => theme.colors.descriptionRecipeColor};
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  margin-bottom: 24px;
  width: 303px;

  @media screen and (min-width: 768px) {
    width: 506px;
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    width: 656px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 24px 44px;
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  font-size: 10px;
  line-height: 1.5;
  padding: 10px 18px;
  color: ${({ theme }) => theme.colors.descriptionRecipeColor};
  margin-bottom: 42px;
  cursor: pointer;
  transition: background-color
    ${({ theme }) => theme.transforms.transitionDuration}
    ${({ theme }) => theme.transforms.timingFunction};

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 330px;
    margin-bottom: 60px;
    padding: 18px 44px;
    border: 2px solid ${({ theme }) => theme.colors.accentColor};
  }

  @media only screen and (min-width: 1280px) {
    margin-bottom: 48px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;

export const CookingTime = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  color: ${({ theme }) => theme.colors.descriptionRecipeColor};
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  height: 14px;

  @media screen and (min-width: 768px) {
    height: 20px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    line-height: 20px;
  }
`;

export const ClockIcon = styled(Clock)`
  margin-right: 5px;
  stroke: ${({ theme }) => theme.colors.descriptionRecipeColor};
  display: inline-block;
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
