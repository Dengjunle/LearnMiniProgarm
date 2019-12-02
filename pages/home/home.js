import request from "../../service/network.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //方式一
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })

    //方式二
    request({
      url:'http://123.207.32.32:8000/recommend'
    }).then((res)=>{
      console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:'hello world',
      path:'/pages/home/home',
      imageUrl:'https://i0.hdslb.com/bfs/bangumi/935d3f5c14da83cb61ffc4d32a28f495ff6f0363.jpg@320w_428h.webp'
    }
  },
  showToast(){
    wx.showToast({
      title: '操作成功',
    })
  },
  showModal(){
    wx.showModal({
      title: '操作',
      content: '确定操作吗？',
    })
  },
  showLoading(){
    wx.showLoading({
      title: '加载中',
    })
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','相机'],
    })
  }
})