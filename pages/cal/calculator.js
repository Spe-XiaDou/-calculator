// pages/cal/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  // behaviors: [btnClick],
  data: {
    /* tipsList运算符列表
     * look当前展示值
     * cal运算逻辑值
     * calLook运算逻辑展示值
     * result要展示的结果值
     * mini为true则启用迷你窗口模式
     * mistake是否运算出错
     */
    calType: [{
        text: '标准',
        value: 0
      },
      {
        text: '科学',
        value: 1
      },
    ],
    curType: '0',
    curTitle: '标准',
    titleSet: ['标准', '科学']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      curTitle: this.data.titleSet[this.data.curType]
    })
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

  },
  // 放大窗口
  expand() {
    this.setData({
      mini: !this.data.mini
    })
  },
  // 退出小程序
  exitProgram() {
    wx.exitMiniProgram({
      success: function () {
        console.log('退出成功');
      },
      fail: function () {
        console.log('退出失败');
      }
    })
  },
  calTypeChange(e) {
    // let det = e.detail
    this.setData({
      curTitle: this.data.titleSet[e.detail],
      curType: e.detail
    })
  }
})