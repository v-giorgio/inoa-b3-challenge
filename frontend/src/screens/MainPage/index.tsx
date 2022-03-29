import React from "react";
import { colors } from "../../assets/theme/theme";
import Form from "../../components/Form";
import { Styles } from "./styles";
import NavigationBar from "../../components/NavigationBar";
import TextSection from "../../components/TextSection";
import { MainContainer } from "./styles";
import Footer from "../../components/Footer";

function MainPage() {
  return (
    <MainContainer style={{ backgroundColor: colors.dark }}>
      <NavigationBar />
      <TextSection />
      <hr style={Styles.divider} />
      <Form />
      <Footer />
    </MainContainer>
  );
}

export default MainPage;
