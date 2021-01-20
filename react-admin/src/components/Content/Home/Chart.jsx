import React, { useEffect, useCallback } from 'react'
import * as echarts from 'echarts';

export default function Chart(props) {
    const { color,legendData,data ,xAxisData} = props.chartData
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
                        data:data[val]
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
                    data:legendData
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: { show: true },
                        data:xAxisData
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
        [color,legendData,data,xAxisData],
    )

    const handleResize = useCallback(
        () => {
            let myChart = echarts.init(document.getElementById('myChart'))
                myChart.resize()
        },
        [],
    )

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        setTimeout(() => {
            drawChart()
        }, 0);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [props, drawChart,handleResize])



    return (
        <div id={'myChart'} style={{ height: '100%', width: '100%' }}></div>
    )
}
