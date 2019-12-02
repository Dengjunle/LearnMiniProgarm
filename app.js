import request from './service/network.js';

App({
  conent:{
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const token = wx.getStorageSync('token');
    if(token&&token.length !==0){
      this.check_token(token);
    }else{
      this.login();
    }
   
  },
  check_token(token){
    request({
      url: 'https://test.com/onLogin',
      method:'post',
      header:{
        token
      }
    }).then((response) => {
      console.log(response);
    }).catch((err)=>{
      console.log()
    })
  },
  login(){
    wx.login({
      success: (res) => {
        if (res.code) {
          request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          }).then((response) => {
            this.conent.token = response.token;
            wx.setStorageSync('token', response.token)
          })
        } else {
          console.log('登录失败' + res.errMsg)
        }
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
