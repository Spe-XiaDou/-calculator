// let Caer = ["num", "simSym", "comSym"]
// 要导出的对象，键的值为运算函数
let calObj = {
  iftArr: infixToArr,
  iftSuffix: infixToSuffix,
  SuffixCal: SuffixCal
}
let calculate = {
  num: (e) => {
    console.log(e);
    const val = e.target.dataset.sym
    let tmpStr = this.data.look + val
    this.setData({
      look: tmpStr,
      result: ''
    })
  },
  simSym: (e) => {
    const val = e.target.dataset.sym
    let tmpStr = this.data.cal + this.data.look + val
    this.setData({
      cal: tmpStr,
      calLook: tmpStr,
      look: ''
    })
  },
  res: (e) => {
    let tmpStr = this.data.cal + this.data.look
    // 字符串转中缀表达式
    let mid = calObj.iftArr(tmpStr)
    // 转后缀表达式
    let suffix = calObj.iftSuffix(mid)
    // 计算后缀表达式
    let res = calObj.SuffixCal(suffix)
    this.setData({
      cal: res,
      calLook: tmpStr,
      look: '',
      result: res
    })
  }
}
// 返回运算符对应的优先级
let priority = (function () {
  const ADD = 1;
  const SUB = 1;
  const MUL = 2;
  const DIV = 2;
  return (operation) => {
    let result = 0;
    switch (operation) {
      case "+":
        result = ADD;
        break;
      case "-":
        result = SUB;
        break;
      case "*":
        result = MUL;
        break;
      case "/":
        result = DIV;
        break;
      default:
    }
    return result;
  };
})();

// 字符串转中缀表达式，不能有空格
function infixToArr(infixExpression) {
  let list = [];
  let i = 0; //这是一个指针，用于遍历中缀表达式字符串
  let str; //对多位数的拼接
  let c; //每遍历到一个字符，就放入到c
  do {
    c = infixExpression.substring(i, i + 1);
    //如果是非数字，就要加入到ls
    if (c.match(/\d+/)) {
      str = ""; //先将str置为""
      while (
        i < infixExpression.length &&
        (c = infixExpression.substring(i, i + 1)).match(/\d+/)
      ) {
        str += c; //拼接
        i++;
      }
      list.push(str);
    } else {
      //如果不是一个数字
      list.push(c);
      i++; //i需要后移
    }
  } while (i < infixExpression.length);
  return list;
}
// 将转换后的中缀表达式转后缀表达式
function infixToSuffix(infixArr) {
  //定义两个栈
  let operator = []; //符号栈
  let suffixArr = []; //后缀表达式栈

  //遍历infixArr
  for (let item of infixArr) {
    //如果是一个数，加入suffixArr
    if (item.match(/\d+/)) {
      suffixArr.push(item);
    } else if (item === "(") {
      operator.push(item);
    } else if (item === ")") {
      //如果是右括号)，则依次弹出Operator的运算符，
      //并压入suffixArr，知道遇到左括号(位置，此时将这一对括号丢弃
      while (operator.length && operator[operator.length - 1] !== "(") {
        suffixArr.push(operator.pop());
      }
      operator.pop(); //将(符号弹出栈，消除小括号
    } else {
      //将s1栈顶的运算符弹出并压入到suffixArr中，再次转到(4.1)与operator中新的栈顶运算符相比较
      while (
        operator.length > 0 &&
        priority(operator[operator.length - 1]) >= priority(item)
      ) {
        suffixArr.push(operator.pop());
      }
      //还需要将item压入栈
      operator.push(item);
    }
  }
  //将operator中剩余的运算符依次弹出并加入suffixArr
  while (operator.length > 0) {
    suffixArr.push(operator.pop());
  }
  return suffixArr;
}
// 计算后缀表达式
function SuffixCal(list) {
  //创建栈，只需要一个栈即可
  let stack = [];
  for (let item of list) {
    if (item.match(/\d+/)) {
      //匹配是多位数
      //入栈
      stack.push(item);
    } else {
      //pop出两个数，并运算，再入栈
      let num2 = parseInt(stack.pop());
      let num1 = parseInt(stack.pop());
      let res = 0;
      if (item === "+") {
        res = num1 + num2;
      } else if (item === "-") {
        res = num1 - num2;
      } else if (item === "*") {
        res = num1 * num2;
      } else if (item === "/") {
        res = num1 / num2;
      } else {
        throw new Error("运算符有误");
      }
      //把res入栈
      stack.push(res + "");
    }
  }
  return stack.pop();
}


module.exports = {
  calculate,
  calObj
}
