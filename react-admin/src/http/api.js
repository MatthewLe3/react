import { fetchData } from './axios'


// 主页
export const getModuleData = async () => {
    return await fetchData('/api/module', 'get')
}