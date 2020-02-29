var axios=require ('axios')

let req = axios.create({
    baseURL: 'http://localhost:3000', // 基本路径
    timeout:  10000  //ms  请求10秒，如果10秒还没有请求到，则提示超时！！（8-12秒） 超时限制！
})

export function getSeller(){
   return req.get('/api/seller');
}
export function getGoods(){
    return req.get('/api/goods');
 }
 export function getRatings(){
    return req.get('/api/ratings');
 }