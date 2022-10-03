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

//图片验证码
export const yzmimg=(data = {})=> {
        return request({
            url: "app/getImgCode",
            method: "GET",
            data,
        });
    }
    
    //获取手机验证码
    export const phoneyzm=(data = {})=> {
        return request({
            url: "getsmscode",
            method: "POST",
            data,
        });
    }
    //喵呜
    export const square=(data = {})=> {
        return request({
            url: "app/square/squareList?page=1&limit=15",
            method: "GET",
            data,
        });
    }
    //话题榜单
    export const themeList=(data = {})=> {
        return request({
            url: "app/square/themeList",
            method: "GET",
            data,
        });
    }
    //图书勘误
    export const newsList=(data = {})=> {
            return request({
                url: "app/news/list/52?page=1&limit=15&      classifyId=52",
                method: "GET",
                data,
            });
        }