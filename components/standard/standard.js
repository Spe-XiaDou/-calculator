// components/standard/standard.js
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
          "value": "²√x",
          "class": "",
          "type": "sqrt",
          "sym": ""
        },
        "2": {
          "value": "C",
          "class": "",
          "type": "clear",
          "sym": ""
        },
        "3": {
          "value": "后退",
          "class": "",
          "type": "back",
          "sym": ""
        },
      },
      {
        "0": {
          "value": "7",
          "class": "num",
          "type": "num",
          "sym": "7"
        },
        "1": {
          "value": "8",
          "class": "num",
          "type": "num",
          "sym": "8"
        },
        "2": {
          "value": "9",
          "class": "num",
          "type": "num",
          "sym": "9"
        },
        "3": {
          "value": "×",
          "class": "",
          "type": "simSym",
          "sym": "*"
        }
      },
      {
        "0": {
          "value": "4",
          "class": "num",
          "type": "num",
          "sym": "4"
        },
        "1": {
          "value": "5",
          "class": "num",
          "type": "num",
          "sym": "5"
        },
        "2": {
          "value": "6",
          "class": "num",
          "type": "num",
          "sym": "6"
        },
        "3": {
          "value": "-",
          "class": "",
          "type": "simSym",
          "sym": "-"
        }
      },
      {
        "0": {
          "value": "1",
          "class": "num",
          "type": "num",
          "sym": "1"
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
          "value": "+",
          "class": "",
          "type": "simSym",
          "sym": "+"
        }
      },
      {
        "0": {
          "value": ".",
          "class": "num",
          "type": "num",
          "sym": "."
        },
        "1": {
          "value": "0",
          "class": "num",
          "type": "num",
          "sym": "0"
        },
        "2": {
          "value": "÷",
          "class": "",
          "type": "num",
          "sym": "/"
        },
        "3": {
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
    }
  }
})