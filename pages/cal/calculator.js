// pages/cal/calculator.js
// import { calObj } from '../../MY/main.js'
var btnClick = require('../../behaviors/btnclick.js')
Page({

  /**
   * 页面的初始数据
   */
  behaviors: [btnClick],
  data: {
    /* tipsList运算符列表
     * look当前展示值
     * cal运算逻辑值
     * calLook运算逻辑展示值
     * result要展示的结果值
     * mini为true则启用迷你窗口模式
     * mistake是否运算出错
     */
    tipsList : [
        /* value：显示的值 
         * type：逻辑值
         * class：样式类，不填为默认值nor
         * sym：运算符
         */
      {
        "0":{
          "value": "7",
          "class": "num",
          "type": "num",
          "sym": "7"
        },
        "1":{
          "value": "8",
          "class": "num",
          "type": "num",
          "sym": "8"
        },
        "2":{
          "value": "9",
          "class": "num",
          "type": "num",
          "sym": "9"
        },
        "3":{
          "value": "×",
          "class": "",
          "type": "simSym",
          "sym": "*"
        }
      },
      {
        "0":{
          "value": "4",
          "class": "num",
          "type": "num",
          "sym": "4"
        },
        "1":{
          "value": "5",
          "class": "num",
          "type": "num",
          "sym": "5"
        },
        "2":{
          "value": "6",
          "class": "num",
          "type": "num",
          "sym": "6"
        },
        "3":{
          "value": "-",
          "class": "",
          "type": "simSym",
          "sym": "-"
        }
      },
      {
        "0":{
          "value": "1",
          "class": "num",
          "type": "num",
          "sym": "1"
        },
        "1":{
          "value": "2",
          "class": "num",
          "type": "num",
          "sym": "2"
        },
        "2":{
          "value": "3",
          "class": "num",
          "type": "num",
          "sym": "3"
        },
        "3":{
          "value": "+",
          "class": "",
          "type": "simSym",
          "sym": "+"
        }
      },
      {
        "0":{
          "value": "C",
          "class": "",
          "type": "clear",
          "sym": ""
        },
        "1":{
          "value": "0",
          "class": "num",
          "type": "num",
          "sym": "0"
        },
        "2":{
          "value": "÷",
          "class": "num",
          "type": "num",
          "sym": "/"
        },
        "3":{
          "value": "=",
          "class": "",
          "type": "res",
          "sym": ""
        },
      }
    ],
    // look: '',
    // cal: '',
    // calLook: '',
    // result: '',
    // mini: false,
    // mistake: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
})