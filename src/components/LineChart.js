import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
    return (
        <Line
            data={
                {
                    labels: props.descendants,
                    datasets: [
                        {
                            label: props.title,
                            data: props.scores,
                            fill: true,
                            backgroundColor: "rgba(75,192,192,0.2)",
                            borderColor: "rgba(75,192,192,1)"
                        },
                    ]
                }
            }
            height={600}
            width={900}
            options={{
                responsive: false,
            }}
        />
    );
}

export default LineChart;
