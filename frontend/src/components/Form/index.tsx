import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { colors } from "../../assets/theme/theme";
import { Button, InputLabel, Input, InputAdornment } from "@mui/material";
import { SectionTitle, MainSection, MainForm, Styles } from "./styles";
import api from "../../services/api";

type FormData = {
  name: string;
  start_date: string;
  end_date: string;
};

function Form() {
  const { control, handleSubmit } = useForm<FormData>();
  const [query, setQuery] = useState({});

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await api
      .post("/assets", {
        name: `${data.name}`,
        query_date: `${data.start_date}`,
      })
      .then((res: any) => {
        setQuery({
          name: res.data.name,
          start_date: res.data.query_date,
          start_value: res.data.query_value,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });

    await api
      .post("/assets", {
        name: `${data.name}`,
        query_date: `${data.end_date}`,
      })
      .then((res: any) => {
        setQuery({
          end_date: res.data.query_date,
          end_value: res.data.query_value,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <MainSection style={{ color: colors.light }}>
      <SectionTitle>Insira os dados</SectionTitle>
      <MainForm onSubmit={handleSubmit(onSubmit)}>
        <InputLabel
          style={Styles.inputLabel}
          htmlFor="input-with-icon-adornment"
        >
          Nome do ativo
        </InputLabel>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              size="medium"
              style={Styles.input}
              disableUnderline={true}
              placeholder="Ex: PETR4"
              endAdornment={
                <InputAdornment position="end">
                  <img
                    width={30}
                    src={require("../../assets/info-icon.png")}
                    alt="Asset input icon"
                  />
                </InputAdornment>
              }
            />
          )}
        />
        <InputLabel
          style={Styles.inputLabel}
          htmlFor="input-with-icon-adornment"
        >
          Data de início
        </InputLabel>
        <Controller
          name="start_date"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              size="medium"
              type="date"
              style={Styles.input}
              disableUnderline={true}
            />
          )}
        />
        <InputLabel
          style={Styles.inputLabel}
          htmlFor="input-with-icon-adornment"
        >
          Data de fim
        </InputLabel>
        <Controller
          name="end_date"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              size="medium"
              type="date"
              style={Styles.input}
              disableUnderline={true}
            />
          )}
        />
        <Button style={Styles.button} type="submit">
          Buscar
        </Button>
      </MainForm>
    </MainSection>
  );
}

export default Form;
