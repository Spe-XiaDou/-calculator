import { calObj } from '../MY/main.js'
// 包含基础的逻辑：十进制下0~9的输入，加减乘除，求值，清空等常用功能。窗口的放大，退出。适用于多种计算器模式。
module.exports = Behavior({
  data: {
    /* look：当前展示值
     * cal：运算逻辑值
     * calLook：运算逻辑展示值
     * result：要展示的结果值
     * mini：为true则启用迷你窗口模式
     * complete：本次运算是否完成，用于允许/禁止部分操作。
     */
    look: '',
    cal: '',
    calLook: '',
    result: '',
    mini: false,
    complete: false
  },
  methods: {
    // 数字0~9的输入
    num(e) {
      if (this.data.complete) {
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
      if (this.data.complete) {
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
      if (this.data.complete) {
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
          complete: true,
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
        complete: false
      })
    },
    // 后退一格
    back() {
      // let cal = this.data.cal.slice(0, -1)
      this.setData({
        cal: this.data.cal.slice(0, -1),
        calLook: this.data.calLook.slice(0, -1),
      })
    }
  }

})