import request  from '../http/http' //引入上面封装好的请求方法
// 选课考试分类
// const getTopCate = () => {
//   return http({
//     url:'home/getFirstClassify'
//   })
// }
export const getTopCate=(data = {})=> {
    return request({
        // baseURL: hostConfig.xxx,
        url: "app/home/getSecondClassify/1?classify_id=1",
        method: "GET",
        data,
    });
}