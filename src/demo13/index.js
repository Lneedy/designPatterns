/*
 * @Author: your name
 * @Date: 2020-04-11 10:50:25
 * @LastEditTime: 2020-04-11 11:10:02
 * @LastEditors: Please set LastEditors
 * @Description: 捏小人-建造者模式
 * @FilePath: \design-patterns\src\demo13\index.js
 */
// 产品类 包含各部件
class Product {
  list = []
  add (part) {
    this.list.push(part)
  }
  show () {
    console.log('构建开始\n');
    this.list.map((part) => {
      console.log(part);
    })
    console.log('\n构建完成\n');
  }
}

// 人 建造者抽象类
class Builder {
  buildHeader () {}
  buildBody () {}
  buildHands () {}
  buildFeet() {}
  getResult () {}
}

// 具体建造者类 -- 大人
class ConcreateBuilder1 extends Builder {
  product = null;
  constructor () {
    super()
    this.product = new Product();
  }

  buildHeader () {
    this.product.add('大头')
  }
  buildBody () {
    this.product.add('大身体')
  }
  buildHands () {
    this.product.add('大手')
  }
  buildFeet () {
    this.product.add('大脚')
  }
  getResult () {
    return this.product
  }
}

// 具体建造者类 -- 小人
class ConcreateBuilder2 extends Builder {
  product = null;
  constructor () {
    super()
    this.product = new Product();
  }

  buildHeader () {
    this.product.add('小头')
  }
  buildBody () {
    this.product.add('小身体')
  }
  buildHands () {
    this.product.add('小手')
  }
  buildFeet () {
    this.product.add('小脚')
  }
  getResult () {
    return this.product
  }
}

// 指挥者类- 控制构建过程
class Director {
  build (Builder) {
    Builder.buildHeader()
    Builder.buildBody()
    Builder.buildHands()
    Builder.buildFeet()
  }
}

// 启动代码
class Main {
  constructor() {
    let director = new Director()
    let bigPeopleBuild = new ConcreateBuilder1()
    let smallPeopleBuild = new ConcreateBuilder2()

    // 执行建造
    director.build(bigPeopleBuild)
    director.build(smallPeopleBuild)

    let bigPeople = bigPeopleBuild.getResult()
    let smallPeople = smallPeopleBuild.getResult()

    bigPeople.show()
    smallPeople.show()
  }
}

new Main()
// result: