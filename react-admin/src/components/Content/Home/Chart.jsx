import React, { useState, useEffect, useCallback, useRef } from 'react'
import * as echarts from 'echarts';

export default function Chart(props) {

    const myBox = useRef()

    const drawChart = useCallback(
        () => {
            var myChart = null
            const { color, legendData, data, xAxisData } = props.chartData
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

            echarts.dispose(myBox.current)
            myChart = echarts.init(myBox.current)
            setWidth(myBox.current.getBoundingClientRect().width)
            myChart.setOption(option)
            myChart.resize()

        },
        [props.chartData]
    )

    const [width, setWidth] = useState(0)

    useEffect(() => {
        drawChart()
        return () => {

        }
    }, [drawChart, width])

    return (
        <div ref={myBox} style={{ height: '100%', width: '100%' }}></div>
    )
}
