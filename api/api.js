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
// 轮播图
export const swiper=(data = {})=> {
  return request({
      // baseURL: hostConfig.xxx,
      url: "app/home/banner/1/4",
      method: "GET",
      data,
  });
}
// 免费直播课
export const classify=(data = {})=> {
  return request({
      url: "app/home/marketingCourse/1?classify_id=1",
      method: "GET",
      data,
  });
}