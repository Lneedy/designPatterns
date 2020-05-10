/*
 * @Author: lneedy
 * @Date: 2020-03-31 09:13:02
 * @LastEditTime: 2020-04-05 19:24:31
 * @LastEditors: Please set LastEditors
 * @Description: 简历复制-原型模式
 * @FilePath: \design-patterns\src\demo9\index.js
 */
/**
 * @description: 简历
 * @param {type} 
 * @return:
 */
class Resume {
  constructor () {
    this.name = ''
    this.age = ''
    this.sex = ''
    // 教学经历
    this.teachingExperience = []
    // 工作经历
    this.workExperience = []
  }
  // 填写基本信息
  setBaseInfo(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  // 填写教育经历
  setTE (teaching) {
    this.teachingExperience = teaching
  }
  // 填写工作经历
  setWE(work) {
    this.workExperience = work
  }
  // 复制简历
  clone () {
    // return Object.assign({}, this)
    // return Object.create(this)
    function F () {}
    F.prototype = this
    return new F()
  }
  // 打印
  print() {
    console.log(`
    \t个人简历\n
    name: ${this.name},\n
    age: ${this.age},\n
    sex: ${this.sex},\n
    teachingExperience: ${this.teachingExperience.reduce((sum, value) => {
      sum += ','
      sum += value
      return sum
    })},\n
    workExperience: ${this.workExperience.reduce((sum, value) => {
      sum +=  ','
      sum += value
      return sum
    })},\n
    `)
  }
}

const resume = new Resume()
let resumeArr = [
  {name: 'lzx', age: '1', sex: '男', te: ['gdkm', 'yhzx', 'gkxx'], we: ['jfk', 'gzyl', 'xywl']},
  {name: 'xjm', age: '3', sex: '女', te: ['123', '456', '789'], we: ['321', '654', '987']},
  {name: 'zjl', age: '12', sex: '男', te: ['abc', 'def', 'ghi'], we: ['cba', 'fed', 'ihg']},
  {name: 'mty', age: '23', sex: '男', te: ['jkl'], we: ['lkj']},
  {name: 'xwz', age: '39', sex: '男', te: ['mno'], we: ['onm']}
]
for (let i = 0; i < 1000000; i++) {
  resumeArr.push( {name: 'lzx', age: '1', sex: '男', te: ['gdkm', 'yhzx', 'gkxx'], we: ['jfk', 'gzyl', 'xywl']},)
}
console.time('for')
for (let i = 0, arr = resumeArr; i < arr.length; i++) {
  // let resume = new Resume() // 4.281ms // 73.700ms
  resume.clone() // 5.224ms // 176.190ms
  resume.setBaseInfo(arr[i].name, arr[i].age, arr[i].sex)
  resume.setTE(arr[i].te)
  resume.setWE(arr[i].we)
  // resume.print()
}
console.timeEnd('for')
