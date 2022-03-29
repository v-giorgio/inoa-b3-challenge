import styled from "styled-components";
import { colors } from "../../assets/theme/theme";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  text-align: justify;
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  text-align: justify;
`;

export const SectionTitle = styled.h1`
  font-size: 48px;
`;

export const Styles = {
  inputLabel: {
    color: colors.darkBlue,
    fontFamily: "Montserrat",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 25,
  },
  input: {
    backgroundColor: colors.light,
    width: 365,
    height: 61,
    borderRadius: 15,
    padding: 15,
    fontSize: 20,
    color: colors.lightBlue,
  },
  button: {
    color: colors.light,
    width: 266,
    height: 61,
    borderRadius: 15,
    backgroundColor: colors.darkBlue,
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
  },
  alert: {
    marginTop: 40,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  requireSpan: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "flex-start",
  },
};
