import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MainSection } from "./styles";
import { colors } from "../../assets/theme/theme";

function AssetsTable({ queries }: any) {
  return (
    <MainSection>
      <TableContainer
        style={{
          backgroundColor: colors.light,
          borderRadius: 20,
          padding: 15,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="assets table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  color: colors.darkBlue,
                }}
              >
                Ativo
              </TableCell>
              <TableCell
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  color: colors.darkBlue,
                }}
                align="right"
              >
                Data inicial
              </TableCell>
              <TableCell
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  color: colors.darkBlue,
                }}
                align="right"
              >
                Valor inicial
              </TableCell>
              <TableCell
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  color: colors.darkBlue,
                }}
                align="right"
              >
                Data final
              </TableCell>
              <TableCell
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  color: colors.darkBlue,
                }}
                align="right"
              >
                Valor final
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {queries.map((query: any) => (
              <TableRow key={query.queryLabel}>
                <TableCell
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    color: colors.darkBlue,
                  }}
                  component="th"
                  scope="row"
                >
                  {query.queryLabel}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    color: colors.darkBlue,
                  }}
                  align="center"
                >
                  {query.queryStartDate}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    color: colors.darkBlue,
                  }}
                  align="center"
                >
                  {query.queryStartValue
                    .toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })
                    .replace(".", ",")}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    color: colors.darkBlue,
                  }}
                  align="center"
                >
                  {query.queryEndDate}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    color: colors.darkBlue,
                  }}
                  align="center"
                >
                  {query.queryEndValue
                    .toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })
                    .replace(".", ",")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainSection>
  );
}

export default AssetsTable;
