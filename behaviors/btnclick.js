import { calObj } from '../MY/main.js'
module.exports = Behavior({
  methods: {
    num(e) {
      const val = e.target.dataset.sym
      let tmpStr = this.data.look + val
      this.setData({
        look: tmpStr,
        result: ''
      })
    },
    simSym(e) {
      const val = e.target.dataset.sym
      let tmpStr = this.data.cal + this.data.look + val
      this.setData({
        cal: tmpStr,
        calLook: tmpStr,
        look: ''
      })
    },
    res(e) {
      let tmpStr = this.data.cal + this.data.look
      // 字符串转中缀表达式
      let mid = calObj.iftArr(tmpStr)
      console.log(mid);
      // 转后缀表达式
      let suffix = calObj.iftSuffix(mid)
      console.log(suffix);
      // 计算后缀表达式
      let res = calObj.SuffixCal(suffix)
      this.setData({
        cal: res,
        calLook: tmpStr,
        look: '',
        result: res
      })
    },
    expand() {
      this.setData({
        mini: !this.data.mini
      })
    }
  }
})