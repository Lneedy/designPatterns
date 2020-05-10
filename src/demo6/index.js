/*
 * @Author: lneedy
 * @Date: 2020-03-31 09:13:02
 * @LastEditTime: 2020-03-31 10:26:45
 * @LastEditors: Please set LastEditors
 * @Description: 穿衣服-装饰器模式
 * @FilePath: \design-patterns\src\demo6\index.js
 */
// 人物类
class Person {
  constructor (name) {
    this.name = name
  }
  show () {
    console.log('装扮的%s', this.name)
  }
}

// 服饰装饰器
class Fine extends Person {
  decorator (component) {
    this.component = component
  }
  show () {
    if (this.component != null) this.component.show()
  }
}

// 毛衣
class Sweater extends Fine {
  show () {
    super.show()
    console.log('毛衣')
  }
}

// 平角裤
class Pants extends Fine {
  show () {
    super.show()
    console.log('平角裤')
  }
}

// 球鞋
class Sneakers extends Fine {
  show () {
    super.show()
    console.log('球鞋')
  }
}

let person = new Person('zexin')
let sw = new Sweater()
let pa = new Pants()
let sn = new Sneakers()

sw.decorator(person)
pa.decorator(sw)
sn.decorator(pa)
sn.show()