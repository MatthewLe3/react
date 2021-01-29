import './homeMock'
import './personManage'
import Mock from 'mockjs'

const Random = Mock.Random
Random.extend({
    // 手机号
    phone: function () {
        const phonePrefixs = ['132', '135', '189']
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
    },

    // 职级
    personPosition:function(){
        const list = ['初级前端工程师','中级前端工程师','高级前端工程师','初级后端工程师',
        '中级后端工程师','高级后端工程师','产品经理','中级测试工程师','高级测试工程师']
        return this.pick(list)
    },

    //日期
     myData:function(){
         let year = Random.natural(2010,2020)
         let date = Random.date('MM-dd')
         return year + '-' + date
     }
})