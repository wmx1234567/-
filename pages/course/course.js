// pages/course/course.js
import {square,themeList,newsList} from '../../api/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabdata:['广场','图书勘误','关注'],
        squarelist:[],
        id:0,
        themeList:[],
        newsList:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        square().then(res => {
            // console.log(res.data.data);
            this.setData({
                squarelist:res.data.data
            })
        })
        themeList().then(res => {
            console.log(res.data.data);
            this.setData({
                themeList:res.data.data
            })
        })
    },
    dyna(e){
        this.setData({
            id:e.currentTarget.dataset.index
        })
        if(e.currentTarget.dataset.index == 1){
            newsList().then(res => {
            console.log(res.data.data);
            this.setData({
                newsList:res.data.data
            })
        })
        }
        
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})