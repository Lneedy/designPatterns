/*
 * @Author: lneedy
 * @Date: 2021-02-11 11:10:02
 * @LastEditTime: 2021-02-11 11:10:02
 * @LastEditors: Please set LastEditors
 * @Description: 备忘录模式, 状态对象与使用者分开，解耦
 * @FilePath: \design-patterns\src\demo14\index.js
 */

// 备忘录类
class Memento {
  constructor (content) {
    this.content = content
  }
  getContent () {
    return this.content
  }
}

// 备忘录列表
class CareTaker {
  constructor () {
    this.list = []
  }

  add (memento) {
    this.list.push(memento)
  }
  get (index) {
    return this.list[index]
  }
  getList () {
    return JSON.parse(JSON.stringify(this.list))
  }
}


// 编辑器类
class Editor {
  constructor () {
    this.content = null
  }
  setContent (content) {
    this.content = content
  }
  getContent () {
    return this.content
  }
  saveContentToMemento () {
    return new Memento(this.content)
  }
  getContentFromMemento (memento) {
    this.content = memento.getContent()
  }
}




class Main {
  constructor () {
    let editor = new Editor()
    let careTaker = new CareTaker()

    // 当前备忘录的列表
    console.log('当前已操作内容', careTaker.getList())

    // 执行操作
    editor.setContent('裁剪')
    editor.setContent('增加亮度')

    // 当前备忘录的列表
    console.log('当前已操作内容', careTaker.getList())

    // 将操作的内容进行备份
    careTaker.add(editor.saveContentToMemento())

    // 执行操作
    editor.setContent('增加透明度')

    // 将当前的操作内容进行备份
    careTaker.add(editor.saveContentToMemento())

    // 获取当前的操作状态
    console.log('当前状态：', editor.getContent())

    // 当前备忘录的列表
    console.log('当前已操作内容', careTaker.getList())

    // 撤销上一次操作
    console.log('撤销一次操作：', careTaker.get(1))
    editor.getContentFromMemento(careTaker.get(1))

    // 获取当前的操作状态
    console.log('当前状态：', editor.getContent())
  
    // 当前备忘录的列表
    console.log('当前已操作内容', careTaker.getList())

    // 撤销上一次操作
    console.log('撤销一次操作：', careTaker.get(0))
    editor.getContentFromMemento(careTaker.get(0))

    // 获取当前的操作状态
    console.log('当前状态：', editor.getContent())

    // 当前备忘录的列表
    console.log('当前已操作内容', careTaker.getList())
  }
}

new Main()
// result: