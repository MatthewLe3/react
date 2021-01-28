import Mock from 'mockjs'
const Random = Mock.Random;

// 模块数据
Mock.mock('/mock/api/home/module', 'get', {
    code: 200,
    msg: 'success',
    data: {
        'ship': Random.natural(20, 300),
        'shipments': Random.natural(20, 300),
        'product': Random.natural(20, 300),
        'spare': Random.natural(20, 300),
    },
});

//  申请表信息
Mock.mock('/mock/api/home/application', 'get', {
    code: 200,
    msg: 'success',
    data: [
        { title: '19号加班情况汇报', time: '2021-01-19', person: Random.cname(), email: Random.email(), avatar: '', descripte: '今日晚项目上线，需加班，对相关情况进行汇报。' },
        { title: '23号调休申请', time: '2021-01-19', person: Random.cname(), email: Random.email(), avatar: '', descripte: '本人想要于23号进行调休，希望予以批准。' },
    ]
});

// 图表数据
Mock.mock('/mock/api/home/chart', 'get', {
    code: 200,
    msg: 'success',
    data: {
        color: ['#f55587', '#F3BF41', '#4193D3', '#61CCBD',],
        xAxisData: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        legendData: ['Cycle Time', 'Account', 'Inventory', 'Stock'],
        chartData: {
            'Cycle Time|5': ['@integer(10, 100)'],
            'Account|5': ['@integer(10, 100)'],
            'Inventory|5': ['@integer(10, 100)'],
            'Stock|5': ['@integer(10, 100)'],
        }
    }
});

// 表格数据

Mock.mock('/mock/api/home/table', 'get', {
    code: 200,
    msg: 'success',
    'data|15': [
        {
            'id|+1': 1,
            'name': '@cname()',
            'email': '@email()',
            'phone': ['@phone'],
            'age': '@integer(20, 40)',
            'sex': '@integer(0, 1)'
        }
    ]
});