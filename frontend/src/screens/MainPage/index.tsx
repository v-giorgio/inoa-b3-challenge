import React from "react";
import { colors } from "../../assets/theme/theme";
import NavigationBar from "../../components/NavigationBar";
import { MainContainer } from "./styles";

function MainPage() {
  return (
    <MainContainer style={{ backgroundColor: colors.dark }}>
      <NavigationBar />
    </MainContainer>
  );
}

export default MainPage;
