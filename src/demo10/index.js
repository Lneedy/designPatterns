/*
 * @Author: lneedy
 * @Date: 2020-03-31 09:13:02
 * @LastEditTime: 2020-04-05 20:07:43
 * @LastEditors: Please set LastEditors
 * @Description: 学生答卷-模板模式
 * @FilePath: \design-patterns\src\demo10\index.js
 */
/**
 * @description: 试题库
 * @param {type} 
 * @return:
 */
class PaperLibrary {
  constructor (name) {
    this.name = name
  }
  answer1() {}

  answer2() {}

  answer3() {}

  question1 () {
    console.log(`
    1. lzx帅不帅?\n
    答案: ${this.answer1()}
    `)
  }
  question2 () {
    console.log(`
    2. lzx会玩游戏吗?\n
    答案: ${this.answer2()}
    `)
  }
  question3 () {
    console.log(`
    3. lzx会喜欢谁?\n
    答案: ${this.answer3()}
    `)
  }

  studentsName() {
    console.log(`${this.name}说: \n`)
  }

  output () {
    let i = 1;
    let flag = true
    this.studentsName()
    while (flag) {
      if (this[`question${i}`]) {
        flag = true
        this[`question${i}`]()
        i++
      } else {
        flag = false
      }
    }
  }
}

class XiaoMing extends PaperLibrary {
  answer1 () {
    return '帅'
  }
  answer2 () {
    return '会'
  }
  answer3 () {
    return 'xjm'
  }
}

class XiaoHong extends PaperLibrary {
  answer1 () {
    return '还行'
  }
  answer2 () {
    return '不会'
  }
  answer3 () {
    return '自己'
  }
}
const xiaoming = new XiaoMing('小明')
const xiaohong = new XiaoHong('小红')
xiaoming.output()
xiaohong.output()