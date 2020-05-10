/*
 * @Author: lneedy
 * @Date: 2020-03-21 10:35:04
 * @LastEditTime: 2020-03-22 19:08:38
 * @LastEditors: Please set LastEditors
 * @Description: 计算器-面向过程
 * @FilePath: \design-patterns\src\demo1\index.js
 */
const chalk = require('chalk');
const inquirer = require('inquirer');
const operatorArrs = ['+', '-', '*', '/', 'sqrt'];
/**
 * @description: 运算类
 * @param {type} 无
 * @return: number
 */

class Operator {
  constructor() {
    this.A = undefined;
    this.B = undefined;
    this.operator = undefined;
    this.result = undefined;
  }
  // 输入方法
  async setInputParams() {
    await inquirer
      .prompt([
        {
          name: 'A',
          message: '请输入A: '
        },
        {
          name: 'operator',
          message: `请输入运算符(${operatorArrs.map(v => v)}): `
        },
        {
          name: 'B',
          message: '请输入B: '
        }
      ])
      .then(answers => {
        const {A, B, operator} = answers;
        this.A = A;
        this.B = B;
        this.operator = operator;
        this.operatorResult();
      });
  }
  // 运算结果
  operatorResult() {
    const {A, B, operator} = this;
    switch (operator) {
      case '+':
        this.result = parseInt(A) + parseInt(B);
        break;
      case '-':
        this.result = parseInt(A) - parseInt(B);
        break;
      case '*':
        this.result = parseInt(A) * parseInt(B);
        break;
      case '/':
        this.result = parseInt(A) / parseInt(B);
        break;
      case 'sqrt':
        this.result = Math.sqrt(A * A + B * B);
      default:
        console.error('请输入正确的运算符');
        break;
    }
    this.getResult();
  }

  // 获取答案
  getResult() {
    const {A, B, operator, result} = this;
    console.log(chalk.green('$') + ` ${A}${operator}${B}结果为: ${result}`);
  }
}

let O = new Operator();
O.setInputParams();
// O.getResult();
