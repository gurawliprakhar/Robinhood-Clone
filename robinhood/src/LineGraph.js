import React from 'react'
import { Line } from "react-chartjs-2";
import { setDatasets } from 'react-chartjs-2/dist/utils';

function LineGraph() {
  return (
    <div className="linegraph">
        <Line 
          data={{
             datasets: [
                {
                    
                }
             ]      
          }}
        />
    </div>
  )
}

export default LineGraph;