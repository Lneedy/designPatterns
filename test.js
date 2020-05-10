const inquirer = require('inquirer');
const chalk = require('chalk');
inquirer
  .prompt([
    {
      name: 'A',
      message: '请输入A: '
    },
    {
      name: 'operator',
      message: '请输入运算符(+-*/): '
    },
    {
      name: 'B',
      message: '请输入B: '
    }
  ])
  .then(answers => {
    let {A, operator, B} = answers;
    let result;
    switch (operator) {
      case '+':
        result = parseInt(A) + parseInt(B);
        break;
      case '-':
        result = A - B;
        break;
      case '*':
        result = A * B;
        break;
      case '/':
        if (B !== 0) {
          result = A / B;
        } else {
          console.error('除数不能为 0 ');
        }
        break;
      default:
        console.error('请输入正确的内容');
        return;
    }
    if (result !== undefined) {
      console.log(chalk.green('$') + ` ${A}${operator}${B}结果为: ${result}`);
    }
  });
