import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Button } from "@mui/material";
import { MainSection, Styles } from "./styles";
import { colors } from "../../assets/theme/theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Preço de fechamento de ativos / dia",
    },
  },
};

interface Query {
  queryLabel: string;
  queryStartDate: string;
  queryStartValue: number;
  queryEndDate: string;
  queryEndValue: number;
}

function Chart({ query }: any) {
  const [items, setItems] = useState<any>(false);
  const [queryData, setQueryData] = useState<Query>();
  const [queries, setQueries] = useState<any>([]);

  const queryChange = (query: any) => {
    if (query.name) {
      setQueryData({
        queryLabel: query.name,
        queryStartDate: query.start_date,
        queryStartValue: query.start_value,
        queryEndDate: query.end_date,
        queryEndValue: query.end_value,
      });

      setItems(true);
      // setQueries([...queries, queryData]);
    }
  };

  const labels = [queryData?.queryStartDate, queryData?.queryEndDate];

  const data = {
    labels,
    datasets: [
      {
        label: queryData?.queryLabel,
        data: [queryData?.queryStartValue, queryData?.queryEndValue],
        borderColor: colors.darkBlue,
        backgroundColor: colors.darkBlue,
      },
    ],
  };

  useEffect(() => {
    queryChange(query);
  }, [query]);

  return (
    <MainSection>
      {items && (
        <>
          <Line style={Styles.lineStyle} options={options} data={data} />
          <Button style={Styles.button} type="submit">
            Limpar busca
          </Button>
        </>
      )}
    </MainSection>
  );
}

export default Chart;
