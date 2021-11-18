import React, { FC } from "react";
import styled from "styled-components";

import AccountCircle from "@mui/icons-material/AccountCircle";

import { ButtonWithIcon } from "../../molecules/button-with-icon";
import { Container } from "../../molecules/container";
import { Flexbox } from "../../molecules/layout";
import { HamburgerMenu } from "../hamburgerMenu";

const MainPageHeader: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Flexbox justify="space-between" align="center">
          <StyledLogo>
            <a href="/">compass</a>
          </StyledLogo>

          {/* pc */}
          <StyledPCButtonWrap>
            <ButtonWithIcon icon={AccountCircle} iconSize="large" />
          </StyledPCButtonWrap>

          {/* tab & sp */}
          <StyledButtonWrap>
            <HamburgerMenu />
          </StyledButtonWrap>
        </Flexbox>
      </Container>
    </StyledHeader>
  );
};

export default MainPageHeader;

const StyledHeader = styled.header`
  height: 90px;
  box-shadow: 0 1px 2px #555;
  color: #555;
  text-transform: uppercase;
`;
const StyledLogo = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-left: 8px;
  @media screen and (min-width: 900px) {
    margin-left: 0;
  }
  &::first-letter {
    color: #8bd5da;
  }
`;
const StyledPCButtonWrap = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;
const StyledButtonWrap = styled.div`
  margin-right: 8px;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
