import React, { useState, useEffect, useCallback } from 'react'
import * as echarts from 'echarts';

export default function Chart(props) {
    const { color, legendData, data, xAxisData } = props.chartData
    const drawChart = useCallback(
        () => {
            let series = []
            legendData.forEach(val => {
                series.push({
                    name: val,
                    type: 'bar',
                    barGap: '80%',
                    barWidth: 8,
                    itemStyle: {
                        borderRadius: [15, 15, 0, 0]
                    },
                    data: data[val]
                })
            });
            let myChart = echarts.init(document.getElementById('myChart'))
            let option = {
                color: color,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: legendData
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: { show: true },
                        data: xAxisData
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: series
            };
            myChart.setOption(option)
        },
        [color, legendData, data, xAxisData],
    )


    const [width, setWidth] = useState(0)
    const containerWidth = useCallback(() => {
        setTimeout(() => {
            setWidth(document.getElementById('myChart').getBoundingClientRect().width)
            let myChart = echarts.init(document.getElementById('myChart'))
            myChart.resize()
        }, 500)
    }, [setWidth])

    useEffect(() => {
        setTimeout(() => {
            drawChart()
            containerWidth()
        }, 10);
    }, [props, drawChart, containerWidth, width])



    return (
        <div id={'myChart'} style={{ height: '100%', width: '100%' }}></div>
    )
}
