import { View, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

export default function Chart({ id }) {
    const [history, setHistory] = useState({
        labels: [1],
        datasets: [
            {
                data: [1]
            }
        ]
    });

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
            .then(({ data }) => {
                const history = {
                    datasets: [
                        {
                            data: (data.data.map((item) => (Math.round(item.priceUsd * 100) / 100)))
                        }
                    ]
                };
                setHistory(history);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <View>
            <LineChart
                data={history}
                width={Dimensions.get('window').width}
                height={320}
                yAxisSuffix='$'
                yAxisInterval={1}
                withDots={false}
                withInnerLines={false}
                withOuterLines={false}
                chartConfig={{
                    decimalPlaces: 2,
                    color: (opacity = 0) => `rgba(0, 255, 0, ${opacity})`,
                    labelColor: (opacity = 0) => `rgba(255,255,255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                }}
                bezier
                style={{
                    marginTop: 100,
                    borderRadius: 16,
                }} />
        </View>
    );
}