// components/scientific/scientific.js
import { factCal } from '../../MY/main.js'
var btnClick = require('../../behaviors/btnclick.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  behaviors: [btnClick],
  /**
   * 组件的初始数据
   */
  data: {
    tipsList: [
      /* value：显示的值 
       * type：逻辑值
       * class：样式类，不填为默认值nor
       * sym：运算符
       */      
      {
        "0": {
          "value": "x²",
          "class": "",
          "type": "square",
          "sym": ""
        },
        "1": {
          "value": "|x|",
          "class": "",
          "type": "abs",
          "sym": ""
        },
        "2": {
          "value": "π",
          "class": "",
          "type": "getπ",
          "sym": ""
        },
        "3": {
          "value": "e",
          "class": "",
          "type": "gete",
          "sym": ""
        },
        "4": {
          "value": "后退",
          "class": "",
          "type": "back",
          "sym": ""
        },
      },
      {
        "0": {
          "value": "²√x",
          "class": "",
          "type": "sqrt",
          "sym": "/"
        },
        "1": {
          "value": "(",
          "class": "",
          "type": "simSym",
          "sym": "("
        },
        "2": {
          "value": ")",
          "class": "",
          "type": "simSym",
          "sym": ")"
        },
        "3": {
          "value": "n!",
          "class": "",
          "type": "fact",
          "sym": ""
        },
        "4": {
          "value": "",
          "class": "",
          "type": "",
          "sym": ""
        },
      },
      {
        "0": {
          "value": "xʸ",
          "class": "",
          "type": "simSym",
          "sym": "^"
        },
        "1": {
          "value": "7",
          "class": "num",
          "type": "num",
          "sym": "7"
        },
        "2": {
          "value": "8",
          "class": "num",
          "type": "num",
          "sym": "8"
        },
        "3": {
          "value": "9",
          "class": "num",
          "type": "num",
          "sym": "9"
        },
        "4": {
          "value": "×",
          "class": "",
          "type": "simSym",
          "sym": "*"
        }
      },
      {
        "0": {
          "value": "10ˣ",
          "class": "",
          "type": "sqrt",
          "sym": "/"
        },
        "1": {
          "value": "4",
          "class": "num",
          "type": "num",
          "sym": "4"
        },
        "2": {
          "value": "5",
          "class": "num",
          "type": "num",
          "sym": "5"
        },
        "3": {
          "value": "6",
          "class": "num",
          "type": "num",
          "sym": "6"
        },
        "4": {
          "value": "-",
          "class": "",
          "type": "simSym",
          "sym": "-"
        }
      },
      {
        "0": {
          "value": "log",
          "class": "",
          "type": "sqrt",
          "sym": "/"
        },
        "1": {
          "value": "2",
          "class": "num",
          "type": "num",
          "sym": "2"
        },
        "2": {
          "value": "3",
          "class": "num",
          "type": "num",
          "sym": "3"
        },
        "3": {
          "value": "4",
          "class": "num",
          "type": "num",
          "sym": "4"
        },
        "4": {
          "value": "+",
          "class": "",
          "type": "simSym",
          "sym": "+"
        }
      },
      {
        "0": {
          "value": "ln",
          "class": "",
          "type": "sqrt",
          "sym": "/"
        },
        "1": {
          "value": "C",
          "class": "",
          "type": "clear",
          "sym": ""
        },
        "2": {
          "value": "1",
          "class": "num",
          "type": "num",
          "sym": "1"
        },
        "3": {
          "value": "÷",
          "class": "",
          "type": "num",
          "sym": "/"
        },
        "4": {
          "value": "=",
          "class": "",
          "type": "res",
          "sym": ""
        },
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    square() {
      let sqr = this.data.look * this.data.look
      this.setData({
        look: sqr
      })
    },
    sqrt() {
      let sqrt = Math.sqrt(this.data.look)
      this.setData({
        result: sqrt,
        complete: true
      })
    },
    gete() {
      this.setData({
        look: Math.E
      })
    },
    getπ() {
      this.setData({
        look: Math.PI
      })
    },
    abs() {
      this.setData({
        look: Math.abs(this.data.look)
      })
    },
    log10() {
      this.setData({
        look: Math.log10(this.data.look)
      })
    },
    ln() {
      this.setData({
        look: Math.log(this.data.look)
      })
    },
    fact() {
      let val = this.data.look
      if (val % 1 != 0) {
        return this.setData({
          result: '请输入正整数',
          complete: true
        })
      }
      let res = factCal(val)

      this.setData({
        result: res
      })
    }
  }
})
