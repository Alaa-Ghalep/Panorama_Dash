import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler 
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler 
);
 const options = {
  plugins: {
    legend:false,
  },
  scales:{
    // y:{min:0,max:100}
    y:{display:false},
    x:{grid:{ display:false},
     ticks: {
      color:'#fff',
    },},

  }
};

 const data = {
  labels:['Jan','Feb','Mar','Apr','May','Jun','Jul'],
  color:'#fff',
  legend:{
    display: '',
  },
  datasets: [
    {
      label: 'Dataset 1',
      legend:{
        display: '',
      },
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }))
      data:[140,90,124,155,135,120,160],
      borderColor: '#fff',
      backgroundColor: '#8E6D76',
      pointBorderColor:'#fff',
      color:'#fff',
      fill:true,

      tension:0.4,
      fill: {
        target: "origin", // 3. Set the fill options
        above: 'rgb(142,109,118)'
        
      },
    },
    
  

  ],
};


export default function ChartComp() {
  return (
    <div className='mt-4 ' style={{backgroundColor:'#62657E',borderRadius:15}}>
          <div className='text-white p-4  '>

    <h5 className='text-white'>Customers Activity</h5>
</div>
<div className='py-5'>
<div className='py-5'>
        <Line
    data={data}
    options={options}></Line>
        </div>
       
        </div> </div>
  )
}
