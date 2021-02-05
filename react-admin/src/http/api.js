import { fetchData } from './axios'

// 登录页
export const getLogin = async (data) => {
    return await fetchData('/api/egg/login', 'get',data)
}

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

// 文件
export const getFile = async () => {
    return await fetchData('/api/file/list', 'get')
}

// export const downloadFile = async data => {
//     return await fetchData('/api/file/download','get',data)
// } 