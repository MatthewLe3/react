import Mock from 'mockjs'

Mock.mock('/mock/api/personManage/table', 'get', {
    code: 200,
    msg: 'success',
    'data|15': [
        {
            'id|+1': 1,
            'name': '@cname()',
            'sex': '@integer(0, 1)',
            'date': '@myData',
            'address|1': [['江苏', '南京'], ['浙江', '杭州'], undefined],
            'position': '@personPosition',
            'evaluation|1': [2, 2.5, 3, 3.5, 4, 4.5, 5],
            'authority': '@integer(1, 2)',
            'editable': false
        }
    ]
});