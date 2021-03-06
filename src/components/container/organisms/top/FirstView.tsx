import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { makeStyles } from "@mui/styles";
import { Grid as MuiGrid } from "@mui/material";

import { SimpleScrollDown } from "../../../presentational/atoms";
import { Container } from "../../layout";
const useStyles = makeStyles(() => ({
  gridContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
  },
  gridItem: {
    marginBottom: "48px",
    position: "relative",
  },
}));

const FirstView: FC = () => {
  const classes = useStyles();
  return (
    <StyledFirstView>
      <Container position="relative">
        <MuiGrid container className={classes.gridContainer}>
          <MuiGrid item xs={12} className={classes.gridItem}>
            <StyledTitle>まだエンジンのかかっていない脳に活を入れる。</StyledTitle>
          </MuiGrid>
          <MuiGrid item xs={12}>
            <StyledList>
              <li>問題解決力も</li>
              <li>説得力も</li>
              <li>決断力も</li>
            </StyledList>
            <StyledText>
              COMPASSで
              <br />
              すべて身につく。
            </StyledText>
          </MuiGrid>
        </MuiGrid>
        <SimpleScrollDown delay="5.4s" />
      </Container>
    </StyledFirstView>
  );
};

export default FirstView;

// アニメーションの設定 ===============================================
const slideUpAnimation = keyframes`
0% {
  opacity: 0;
  transform: translateY(30px);
}
75% {
  transform: translateY(-2px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const slideAnimation = keyframes`
0% {
  top: 0;
}
100% {
  top: -100%;
}
`;

// コンポーネントの定義 ===============================================
const StyledFirstView = styled.div`
  position: relative;
  font-weight: 600;
  overflow: hidden;
  text-align: left;
  height: 100vh;
  background: #000;
  padding-top: 72px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: block;
    animation: ${slideAnimation} 1s ease-in-out forwards;
  }
`;
const StyledTitle = styled.h1`
  font-size: 32px;
  letter-spacing: 1.5px;
  opacity: 0;
  margin: 0 auto 48px;
  animation: ${slideUpAnimation} 1.2s ease-in-out 1s forwards;

  @media screen and (min-width: 600px) {
    font-size: 48px;
    letter-spacing: 3px;
    width: calc(100% - 224px);
  }
  @media screen and (min-width: 1024px) {
    width: calc(100% - 388px);
  }
`;
const StyledList = styled.ul`
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  letter-spacing: 1.5px;
  margin-bottom: 48px;

  @media screen and (min-width: 600px) {
    font-size: 32px;
    letter-spacing: 3px;
    width: calc(100% - 224px);
    margin: 0 auto 48px;
  }
  @media screen and (min-width: 1024px) {
    width: calc(100% - 388px);
  }

  li {
    margin-bottom: 16px;
    opacity: 0;
  }
  li:first-child {
    animation: ${slideUpAnimation} 1.2s ease-in-out 1.8s forwards;
  }
  li:nth-child(2) {
    animation: ${slideUpAnimation} 1.2s ease-in-out 2.6s forwards;
  }
  li:last-child {
    animation: ${slideUpAnimation} 1.2s ease-in-out 3.4s forwards;
  }
`;
const StyledText = styled.p`
  font-size: 24px;
  letter-spacing: 1.5px;
  opacity: 0;
  animation: ${slideUpAnimation} 1.2s ease-in-out 4.2s forwards;

  @media screen and (min-width: 600px) {
    font-size: 32px;
    letter-spacing: 3px;
    width: calc(100% - 224px);
    margin: 0 auto 48px;
  }
  @media screen and (min-width: 1024px) {
    width: calc(100% - 388px);
  }
`;
