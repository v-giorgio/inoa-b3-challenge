import React from "react";
import { colors } from "../../assets/theme/theme";
import Form from "../../components/Form";
import NavigationBar from "../../components/NavigationBar";
import TextSection from "../../components/TextSection";
import { MainContainer } from "./styles";

function MainPage() {
  return (
    <MainContainer style={{ backgroundColor: colors.dark }}>
      <NavigationBar />
      <TextSection />
      <hr
        style={{
          width: "100vw",
          marginTop: 200,
          height: 18,
          backgroundColor: colors.darkBlue,
          border: "none",
        }}
      />
      <Form />
    </MainContainer>
  );
}

export default MainPage;
