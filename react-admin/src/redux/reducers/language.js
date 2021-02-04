/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/

import { CHINESE, ENGLISH, JAPANESE, KOERAN } from '../constant'

import Chinese from '../../i18n/Chinese'
import English from '../../i18n/English'
import Japanese from '../../i18n/Japanese'
import Koeran from '../../i18n/Koeran'

const initState = Chinese //初始化状态
export default function countReducer(preState = initState, action) {
    //从action对象中获取：type、data
    const { type } = action

    //根据type决定如何加工数据
    switch (type) {

        case CHINESE:
            return Chinese
        case ENGLISH:
            return English
        case JAPANESE:
            return Japanese
        case KOERAN:
            return Koeran
        default:
            return preState
    }
}