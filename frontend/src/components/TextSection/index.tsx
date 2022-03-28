import React from "react";
import { colors } from "../../assets/theme/theme";
import { MainSection, SectionTitle, SectionText } from "./styles";

function TextSection() {
  return (
    <MainSection style={{ color: colors.light }}>
      <SectionTitle>Nosso serviço</SectionTitle>
      <SectionText>
        Com a nossa aplicação, você pode consultar o preço de ativos em tempo
        real
        <br />
        <br />
        Basta informar o nome do ativo e as datas de início e fim da consulta
      </SectionText>
    </MainSection>
  );
}

export default TextSection;
