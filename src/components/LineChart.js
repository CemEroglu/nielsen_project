import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import * as StoryAPI from '../services/StoryAPI'


const LineChart = (props) => {
    
    return (
        
        <Line
            data={
                {


                    labels: props.descendants,
                    datasets: [
                        {
                            label: "Score Of Descendants",
                            data: props.scores,
                            fill: true,
                            backgroundColor: "rgba(75,192,192,0.2)",
                            borderColor: "rgba(75,192,192,1)"
                        },
                    ]

                }
            }
            height={500}
            width={750}
            options={{responsive:false}}
        />
    );
}

export default LineChart;
