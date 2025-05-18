import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,//y
  CategoryScale,
  Legend,
  Tooltip,

} from 'chart.js';
import {Bar } from 'react-chartjs-2';


ChartJS.register(
    BarElement,
    LinearScale,//y
  CategoryScale,
    Legend,
    Tooltip,

  );

 const data={
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'GitHub Commits',
      backgroundColor: ['#D9D9D9', '#8E6D76', '#D9D9D9','#8E6D76', '#D9D9D9'],
      borderRadius:10,
      data: [7, 10, 12, 19, 10, 20, 19],
    },
  ],
  };
  //labels="months"
  const options={
    plugins: {
      legend: {
        display:false
      }
    },
  
    scales: {
      x: {
        // display:false,
        grid: {
          display:false,
                   },
        ticks: {
          
          color: '#FFFFFF',
        },
      },
      y: {
        grid: {
          display:false,
                   },
        ticks: {
          color:'#FFFFFF',
        },
        // display:false,
      },
    },
    }
  

export default function ChartrBar() {
  return (
      <div>
         <div>
     
          <Bar
      data={data}
      options={options}
      >
      </Bar>
  
          </div>
    </div>
  )
}
