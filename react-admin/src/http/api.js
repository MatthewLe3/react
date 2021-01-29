import { fetchData } from './axios'


// 主页
export const getModuleData = async () => {
    return await fetchData('/api/home/module', 'get')
}

export const getApplicationData = async () => {
    return await fetchData('/api/home/application', 'get')
}

export const getChartData = async () => {
    return await fetchData('/api/home/chart', 'get')
}

export const getTableData = async () => {
    return await fetchData('/api/home/table', 'get')
}

// 人员管理
export const getPersonManageData = async () => {
    return await fetchData('/api/personManage/table', 'get')
}