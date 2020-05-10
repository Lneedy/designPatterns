/*
 * @Author: lneedy
 * @Date: 2020-03-22 15:23:28
 * @LastEditTime: 2020-03-22 19:08:53
 * @LastEditors: Please set LastEditors
 * @Description: 计算器-简单工厂模式
 * @FilePath: \design-patterns\src\demo2\index.js
 */
const chalk = require('chalk');
const inquirer = require('inquirer');

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
    this.result = Number(this.A) + Number(this.B);
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

inquirer
  .prompt([
    {
      name: 'A',
      message: '请输入 A: '
    },
    {
      name: 'operator',
      message: '请输入(+-*/sqrt): '
    },
    {
      name: 'B',
      message: '请输入 B: '
    }
  ])
  .then(answers => {
    const {A, B, operator} = answers;
    let oper = OperatorionFactory.createOperator(operator);
    oper.NumberA(A);
    oper.NumberB(B);
    let result = oper.getResult();
    console.log(chalk.green('$'), '结果: ' + result);
  });
