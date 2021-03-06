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

import randomColor from "randomcolor";
import AssetsTable from "../AssetsTable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options: any = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        font: {
          size: 12,
          family: "Montserrat",
          weight: "bold",
        },
      },
    },
    title: {
      display: true,
      text: "Preço de fechamento de ativos / dia",
      color: colors.dark,
      font: {
        size: 22,
        family: "Montserrat",
      },
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
  const [labels, setLabels] = useState<any>([]);
  const [dataset, setDataSet] = useState<any>([]);
  const [data, setData] = useState<any>({});

  const queryChange = (query: any) => {
    if (query.name) {
      setQueryData({
        queryLabel: query.name,
        queryStartDate: new Date(query.start_date).toLocaleDateString("pt-br", {
          timeZone: "UTC",
        }),
        queryStartValue: query.start_value,
        queryEndDate: new Date(query.end_date).toLocaleDateString("pt-br", {
          timeZone: "UTC",
        }),
        queryEndValue: query.end_value,
      });

      setItems(true);
    }
  };

  const showAssets = () => {
    setLabels([]);
    setDataSet([]);
    setData({});

    queries.map((value: any) => {
      if (!labels.includes(value.queryStartDate)) {
        labels.push(value.queryStartDate);
      }

      if (!labels.includes(value.queryEndDate)) {
        labels.push(value.queryEndDate);
      }

      let randColor = randomColor();

      dataset.push({
        label: value?.queryLabel,
        data: [
          { x: value.queryStartDate, y: value?.queryStartValue },
          { x: value.queryEndDate, y: value?.queryEndValue },
        ],
        borderColor: randColor,
        backgroundColor: randColor,
      });
    });

    setData({
      labels: labels,
      datasets: dataset,
    });
  };

  const clearChart = () => {
    setQueries([]);
    setItems(false);
  };

  useEffect(() => {
    queryChange(query);
  }, [query]);

  useEffect(() => {
    if (queryData) {
      queries.push(queryData);
    }
    showAssets();
  }, [queryData]);

  return (
    <MainSection>
      {items && (
        <>
          <Line style={Styles.lineStyle} options={options} data={data} />
          <AssetsTable queries={queries} />
          <Button
            onClick={() => clearChart()}
            style={Styles.button}
            type="submit"
          >
            Limpar busca
          </Button>
        </>
      )}
    </MainSection>
  );
}

export default Chart;
