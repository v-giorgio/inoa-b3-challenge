import React, { useEffect, useState } from "react";
import { colors } from "../../assets/theme/theme";
import Form from "../../components/Form";
import { Styles } from "./styles";
import NavigationBar from "../../components/NavigationBar";
import TextSection from "../../components/TextSection";
import { MainContainer } from "./styles";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";

function MainPage() {
  const [query, setQuery] = useState({});

  const queryData = (data: any) => {
    setQuery(data);
  };

  useEffect(() => {
    // console.log(query);
  }, [query]);

  return (
    <MainContainer style={{ backgroundColor: colors.dark }}>
      <NavigationBar />
      <TextSection />
      <hr style={Styles.divider} />
      <Form queryGenerator={queryData} />
      <Chart query={query} />
      <Footer />
    </MainContainer>
  );
}

export default MainPage;
