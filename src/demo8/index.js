/*
 * @Author: lneedy
 * @Date: 2020-03-31 09:13:02
 * @LastEditTime: 2020-04-03 09:25:02
 * @LastEditors: Please set LastEditors
 * @Description: 计算器-工厂模式
 * @FilePath: \design-patterns\src\demo8\index.js
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
class OperatorionFactory {
  createOperator () {}
}

class AddOperatorFactory extends OperatorionFactory {
  createOperator () {
    return new OperatorAdd()
  }
}

class SubOperatorFactory extends OperatorionFactory {
  createOperator () {
    return new OperatorSub()
  }
}

class MulOperatorFactory extends OperatorionFactory {
  createOperator () {
    return new OperatorMul()
  }
}

class DivOperatorFactory extends OperatorionFactory {
  createOperator () {
    return new OperatorDiv()
  }
}

class SqrtOperatorFactory extends OperatorionFactory {
  createOperator () {
    return new OperatorSqrt()
  }
}


let oper = new SqrtOperatorFactory().createOperator();
oper.NumberA(3);
oper.NumberB(4);
let result = oper.getResult();
console.log('结果: ' + result);
