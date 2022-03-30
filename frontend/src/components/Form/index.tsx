import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { colors } from "../../assets/theme/theme";
import {
  Button,
  InputLabel,
  Input,
  InputAdornment,
  Alert,
} from "@mui/material";
import { SectionTitle, MainSection, MainForm, Styles } from "./styles";
import api from "../../services/api";

type FormData = {
  name: string;
  start_date: string;
  end_date: string;
};

type QueryStart = {
  name: string;
  start_date: string;
  start_value: number;
};

type QueryEnd = {
  end_date: string;
  end_value: number;
};

function Form({ queryGenerator }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [queryStart, setQueryStart] = useState<QueryStart>();
  const [queryEnd, setQueryEnd] = useState<QueryEnd>();
  const [query, setQuery] = useState({});
  const [alert, setAlert] = useState(false);

  /* called upon the form submit - api requests */
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setAlert(false);

    await api
      .post("/assets", {
        name: `${data.name}`,
        query_date: `${data.start_date}`,
      })
      .then((res: any) => {
        setQueryStart({
          name: res.data.name,
          start_date: res.data.query_date,
          start_value: res.data.query_value,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
        setAlert(true);
      });

    await api
      .post("/assets", {
        name: `${data.name}`,
        query_date: `${data.end_date}`,
      })
      .then((res: any) => {
        setQueryEnd({
          end_date: res.data.query_date,
          end_value: res.data.query_value,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
        setAlert(true);
      });
  };

  /* renders the main query once all the requests are done */
  useEffect(() => {
    setTimeout(() => {
      setQuery({
        name: queryStart?.name,
        start_date: queryStart?.start_date,
        start_value: queryStart?.start_value,
        end_date: queryEnd?.end_date,
        end_value: queryEnd?.end_value,
      });
    }, 1000);
  }, [queryEnd]);

  /* passes the query data to its parent - MAIN PAGE */
  useEffect(() => {
    queryGenerator(query);
  }, [query, queryGenerator]);

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
            required: "Campo obrigatório",
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
        {errors.name && (
          <span style={Styles.requireSpan}>{errors.name.message}</span>
        )}
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
            required: "Campo obrigatório",
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
        {errors.start_date && (
          <span style={Styles.requireSpan}>{errors.start_date.message}</span>
        )}
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
            required: "Campo obrigatório",
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
        {errors.end_date && (
          <span style={Styles.requireSpan}>{errors.end_date.message}</span>
        )}
        {alert && (
          <Alert style={Styles.alert} severity="error">
            Consulta não encontrada. Tente novamente
          </Alert>
        )}
        <Button style={Styles.button} type="submit">
          Buscar
        </Button>
      </MainForm>
    </MainSection>
  );
}

export default Form;
