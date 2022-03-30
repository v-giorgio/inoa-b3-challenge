import styled from "styled-components";
import { colors } from "../../assets/theme/theme";

export const MainSection = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1.5%;
`;

export const Styles = {
  lineStyle: {
    backgroundColor: colors.light,
    padding: 14,
    borderRadius: 20,
    margin: "0 auto",
    marginTop: 50,
    width: 1000,
  },
  button: {
    color: colors.light,
    width: 226,
    height: 41,
    borderRadius: 15,
    backgroundColor: colors.darkBlue,
    fontFamily: "Montserrat",
    fontSize: 18,
    marginTop: 50,
    fontWeight: "bold",
  },
};
