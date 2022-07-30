import { calObj } from '../MY/main.js'
// 包含基础的逻辑：十进制下0~9的输入，加减乘除，求值，清空等常用功能。窗口的放大，退出。适用于多种计算器模式。
module.exports = Behavior({
  data: {
    /* look当前展示值
     * cal运算逻辑值
     * calLook运算逻辑展示值
     * result要展示的结果值
     * mini为true则启用迷你窗口模式
     * mistake是否运算出错
     */
    look: '',
    cal: '',
    calLook: '',
    result: '',
    mini: false,
    mistake: false
  },
  methods: {
    // 放大窗口
    expand() {
      this.setData({
        mini: !this.data.mini
      })
    },
    // 退出小程序
    exitProgram() {
      wx.exitMiniProgram({
        success: function() {
          console.log('退出成功');
        },
        fail: function() {
          console.log('退出失败');
        }
      })
    },
    // 数字0~9的输入
    num(e) {
      if (this.data.mistake) {
        return
      }
      const val = e.target.dataset.sym
      let tmpStr = this.data.look + val
      this.setData({
        look: tmpStr,
        result: ''
      })
    },
    // 简单运算符（加减乘除）的输入
    simSym(e) {
      if (this.data.mistake) {
        return
      }
      const val = e.target.dataset.sym
      let tmpStr = this.data.cal + this.data.look + val
      this.setData({
        cal: tmpStr,
        calLook: tmpStr,
        look: ''
      })
    },
    // 对运算式进行求值
    res(e) {
      if (this.data.mistake) {
        return
      }
      let tmpStr = this.data.cal + this.data.look
      // 字符串转中缀表达式
      let mid = calObj.iftArr(tmpStr)
      // 转后缀表达式
      let suffix = calObj.iftSuffix(mid)
      // 计算后缀表达式
      let res = calObj.SuffixCal(suffix)
      // console.log(res == 'NaN');
      
      if (res == 'NaN') {
        this.setData({
          result: '算式错误',
          mistake: true,
          calLook: ''
        })
      } else {
        this.setData({
          cal: res,
          calLook: tmpStr,
          look: '',
          result: res
        })
      }
    },
    // 清空运算式
    clear() {
      this.setData({
        look: '',
        calLook: '',
        cal: '',
        result: '',
        mistake: false
      })
    }
  }
})