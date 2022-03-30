import React from "react";
import { colors } from "../../assets/theme/theme";
import { NavSection, NavLogo } from "./styles";

function NavigationBar() {
  return (
    <NavSection style={{ backgroundColor: colors.darkBlue }}>
      <NavLogo src={require("../../assets/logo.png")} alt={"Logo"} />
    </NavSection>
  );
}

export default NavigationBar;
