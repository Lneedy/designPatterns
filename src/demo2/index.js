/*
 * @Author: lneedy
 * @Date: 2020-03-22 15:23:28
 * @LastEditTime: 2020-03-22 19:08:46
 * @LastEditors: Please set LastEditors
 * @Description: 计算器-简单工厂模式
 * @FilePath: \design-patterns\src\demo2\index.js
 */

/**
 * @description: 运算类
 * @param {type}
 * @return:
 */

class Operator {
  construtor() {
    this.A = 0;
    this.B = 0;
    this.result = 0;
  }

  NumberA(value) {
    this.A = value;
  }

  NumberB(value) {
    this.B = value;
  }

  getResult() {
    return this.result;
  }
}

/**
 * @description: 加法运算
 * @param {type}
 * @return:
 */
class OperatorAdd extends Operator {
  getResult() {
    this.result = this.A + this.B;
    return this.result;
  }
}
/**
 * @description: 减法运算
 * @param {type}
 * @return:
 */
class OperatorSub extends Operator {
  getResult() {
    this.result = this.A - this.B;
    return this.result;
  }
}

/**
 * @description: 乘法运算
 * @param {type}
 * @return:
 */
class OperatorMul extends Operator {
  getResult() {
    this.result = this.A * this.B;
    return this.result;
  }
}

/**
 * @description: 除法运算
 * @param {type}
 * @return:
 */
class OperatorDiv extends Operator {
  getResult() {
    if (this.B != 0) {
      this.result = this.A / this.B;
      return this.result;
    } else {
      throw new Error('分母不能为0');
    }
  }
}

/**
 * @description: 勾股运算
 * @param {type}
 * @return:
 */
class OperatorSqrt extends Operator {
  getResult() {
    this.result = Math.sqrt(this.A * this.A + this.B * this.B);
    return this.result;
  }
}

/**
 * @description: 运算工厂类
 * @param {type}
 * @return:
 */
class OperatorionFactory {}

OperatorionFactory.createOperator = value => {
  switch (value) {
    case '+':
      this.operator = new OperatorAdd();
      break;
    case '-':
      this.operator = new OperatorSub();
      break;
    case '*':
      this.operator = new OperatorMul();
      break;
    case '/':
      this.operator = new OperatorDiv();
      break;
    case 'sqrt':
      this.operator = new OperatorSqrt();
      break;
    default:
      throw new Error('请输入已定义的运算');
      break;
  }
  return this.operator;
};

let oper = OperatorionFactory.createOperator('sqrt');
oper.NumberA(3);
oper.NumberB(4);
let result = oper.getResult();
console.log('结果: ' + result);
