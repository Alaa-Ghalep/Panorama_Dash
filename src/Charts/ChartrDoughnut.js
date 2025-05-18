import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
    ArcElement,
    Legend,
    Tooltip,
  );

 const data={
     labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
     legend:{
      display:false
     },
    datasets: [
      {
        backgroundColor: ['#8E6D76', '#D9D9D9', '#BEBEBE', '#62657E'],
        data: [40, 20, 80, 10],
      },
    ],
  };
  const options={
    plugins: {
      legend: {
        display:false
      }
      },
  }

export default function ChartrComp2() {
  return (
      <div className='' >
         <div className='h-100 ' style={{backgroundColor:'#62657E',borderRadius:20}}>
          <div className='text-white p-3'>
      <h4 className='text-white'>Customers </h4>
      <p>Customers that buy products</p>
</div>
<div className='w-75  mx-auto py-4 pb-5'  >
          <Doughnut className=' '
          
      data={data}
      options={options}
    >
      </Doughnut>
      
      </div>
          </div>
    </div>
  )
}
