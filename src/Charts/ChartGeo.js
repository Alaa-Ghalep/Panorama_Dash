import React from "react";
import { Chart } from "react-google-charts";
export const data = [
    ["Country", "Popularity"],
    ["USA", 200],
    ["Canada", 300],
    ["France", 400],
    ["India", 500],
 
  ];
  export const options = {
    plugins: {
        legend: {       
          display:false
            
        }
      },
  colorAxis: { colors: ["#D9D9D9", "#D9D9D9", "#D9D9D9"] },
    backgroundColor: "transparent",
     datalessRegionColor: "#FFFFFF",
    
  };
export default function ChartGeo() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"

      data={data}
      options={options}
    />
  )
}
  