'use strict';
const fs = require('fs');

module.exports = app => {
    class HomeService extends app.Service {
        // 主页模块接口获取
        async module(data) {
            const userData = await fs.readFileSync("./app/data/homeModule.json");

            let userList = JSON.parse(userData.toString())
            return userList
        }

        // 主页申请表信息获取
        async application(data) {
            const applicationData = await fs.readFileSync("./app/data/homeApplication.json");
            let curData = JSON.parse(applicationData.toString())
            return curData
        }

        // 主页图表数据获取
        async chart(data) {
            const chartData = await fs.readFileSync("./app/data/homeChart.json");
            let curChartData = JSON.parse(chartData.toString())
            return curChartData
        }

        // 主页表格数据获取
        async table(data) {
            const tableData = await fs.readFileSync("./app/data/homeTable.json");
            let curTableData = JSON.parse(tableData.toString())
            return curTableData
        }
    }
    return HomeService;
};
