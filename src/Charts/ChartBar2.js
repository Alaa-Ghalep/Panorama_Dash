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
  labels: ['USA', 'Canada', 'France', 'India'],
  datasets: [
    {
      label: 'GitHub Commits',
      backgroundColor:'#D9D9D9', 
      borderRadius:10,
    //    barThickness:30,
    
      data: [21, 80, 91, 65],
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
    indexAxis: 'y',
  
    scales: {
        
      x: {
        grid: {
    //   drowOnChartArea:false
//  display:false,
          },
 display:false,
         
        ticks: {
          
          color: '#fff',
        },
      },
      y: {
        
        ticks: {
          color:'#fff',
        },
        grid: {
            //   drowOnChartArea:false
        //  display:false,
        color:'#fff'
                  },
        // display:false,
      },
    },
    }
  

export default function ChartrBar2() {
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
