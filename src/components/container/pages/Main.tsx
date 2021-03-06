import React from "react";
import styled from "styled-components";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

import { Container } from "../layout";
import { MainPageHeader, TrainingMenus } from "../organisms";
import { BasicTypographyWithIcon } from "../../presentational/molecules";

const Main: React.FC = () => {
  return (
    <StyledMain>
      <MainPageHeader />
      <Container padding={"92px 0 64px"}>
        <BasicTypographyWithIcon
          component="h2"
          variant="h3"
          fontWeight="600"
          icon={MenuBookTwoToneIcon}
          spacing="xxs"
          iconSize="30px"
          iconColor="primary"
          margin="0 0 24px 0"
          text="トレーニングメニュー"
        />
        <TrainingMenus />
      </Container>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  background: #f8fbfe;
  min-height: 100vh;
  color: #555;
`;
