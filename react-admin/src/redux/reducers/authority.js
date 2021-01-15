import { ADMIN,NORMAL} from '../constant'


const initState = {
    userName:'admin'
} //初始化状态
export default function countReducer(preState = initState, action) {
    //从action对象中获取：type、data
    const { type } = action
    //根据type决定如何加工数据
    switch (type) {
        case ADMIN: 
            return {
                userName:ADMIN
            }
        case NORMAL: 
        return {
            userName:NORMAL
        }
        default:
            return preState
    }
}