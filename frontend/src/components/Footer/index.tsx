import React from "react";
import { colors } from "../../assets/theme/theme";
import { FooterSection, FooterText } from "./styles";

function Footer() {
  return (
    <FooterSection style={{ backgroundColor: colors.darkBlue }}>
      <FooterText style={{ color: colors.light }}>
        Copyright © 2022 <br />
        <br />
        Vitor Giorgio
      </FooterText>
    </FooterSection>
  );
}

export default Footer;
