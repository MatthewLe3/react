import Mock from 'mockjs'
const Random = Mock.Random;


// 主页模块数据
Mock.mock('/mock/api/module', 'get', {
    code: 200,
    msg: 'success',
    data: {
    //   'banners|1-10': [
    //     {
    //       image_url: Random.image('200x100', Random.color(), Random.color(), 'png', Random.title(5)),
    //       title: Random.ctitle(5),
    //     },
    //   ],
      'ship':Random.natural(20, 300),
      'shipments':Random.natural(20, 300),
      'product':Random.natural(20, 300),
      'spare':Random.natural(20, 300),
    },
  });