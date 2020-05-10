/*
 * @Author: your name
 * @Date: 2020-04-11 10:50:25
 * @LastEditTime: 2020-04-11 11:10:02
 * @LastEditors: Please set LastEditors
 * @Description: 炒股--外观模式
 * @FilePath: \design-patterns\src\demo11\index.js
 */
// 股票 系列
class stock {
  sell () {}
  buy () {}
}
// 指标股
class stock1 extends stock {
  sell () {}
  buy () {}
}

// 金融证券保险
class stock2 extends stock {
  sell () {}
  buy () {}
}

// 地产
class stock3 extends stock {
  sell () {}
  buy () {}
}

// 航空
class stock4 extends stock {
  sell () {
    console.log('买')
  }
  buy () {}
}


// 钢铁
class stock5 extends stock {
  sell () {
    console.log('买')
  }
  buy () {}
}

// 煤炭
class stock6 extends stock {
  sell () {
    console.log('买')
  }
  buy () {}
}

// 重工机械
class stock7 extends stock {
  sell () {
    console.log('买')
  }
  buy () {}
}

// 电力能源
class stock8 extends stock {
  sell () {
    console.log('买')
  }
  buy () {}
}

// 汽车
class stock9 extends stock {
  sell () {
    console.log('买')
  }
  buy () {}
}

// 有色金属
class stock10 extends stock {
  sell () {
    console.log('买')
  }
  buy () {}
}
