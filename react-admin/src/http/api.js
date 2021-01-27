import { fetchData } from './axios'


// 主页
export const getHomeData = () => {
    fetchData('/asaa/ds','post',{a:'a',b:'bb'}).then((result)=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })
    // return fetchData('/asaa/ds','post',{a:'a',b:'bb'})
}