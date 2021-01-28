import './homeMock'
import Mock from 'mockjs'

Mock.Random.extend({
    // 手机号
    phone: function () {
        var phonePrefixs = ['132', '135', '189']
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
    }
})