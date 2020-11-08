/*
 * @Author: your name
 * @Date: 2020-04-11 10:50:25
 * @LastEditTime: 2020-04-11 11:10:02
 * @LastEditors: Please set LastEditors
 * @Description: 炒股--普通模式
 * @FilePath: \design-patterns\src\demo11\index.js
 */
// 股票 系列
class Stock {
  sell () {
    console.log('卖')
  }
  buy () {
    console.log('买')
  }
}
// 指标股
class Stock1 extends Stock {
  sell () {
    console.log('卖指标股')
  }
  buy () {
    console.log('买指标股')
  }
}

// 金融证券保险
class Stock2 extends Stock {
  sell () {
    console.log('卖金融证券保险股')
  }
  buy () {
    console.log('买金融证券保险股')
  }
}

// 地产
class Stock3 extends Stock {
  sell () {
    console.log('卖地产股')
  }
  buy () {
    console.log('买地产股')
  }
}

// 航空
class Stock4 extends Stock {
  sell () {
    console.log('卖航空股')
  }
  buy () {
    console.log('买航空股')
  }
}


// 钢铁
class Stock5 extends Stock {
  sell () {
    console.log('卖钢铁股')
  }
  buy () {
    console.log('买钢铁股')
  }
}

// 煤炭
class Stock6 extends Stock {
  sell () {
    console.log('卖煤炭股')
  }
  buy () {
    console.log('买煤炭股')
  }
}

// 重工机械
class Stock7 extends Stock {
  sell () {
    console.log('卖重工机械股')
  }
  buy () {
    console.log('买重工机械股')
  }
}

// 电力能源
class Stock8 extends Stock {
  sell () {
    console.log('卖电力能源股')
  }
  buy () {
    console.log('买电力能源股')
  }
}

// 汽车
class Stock9 extends Stock {
  sell () {
    console.log('卖汽车股')
  }
  buy () {
    console.log('买汽车股')
  }
}

// 有色金属
class Stock10 extends Stock {
  sell () {
    console.log('卖有色金属股')
  }
  buy () {
    console.log('买有色金属股')
  }
}

// 启动代码
class Main {
  constructor() {
    let g1, g2, g3, g4, g5, g6, g7, g8, g9, g10;
    g1 = new Stock1()
    g2 = new Stock2()
    g3 = new Stock3()
    g4 = new Stock4()
    g5 = new Stock5()
    g6 = new Stock6()
    g7 = new Stock7()
    g8 = new Stock8()
    g9 = new Stock9()
    g10 = new Stock10()
    // ...
    
    console.log('顾客自己买股票')
    console.log('===============')
    g1.buy()
    g2.buy()
    g3.buy()
    g4.buy()
    g5.buy()
    g6.buy()
    g7.buy()
    g8.buy()
    g9.buy()
    g10.buy()
    console.log('\n')
    console.log('顾客自己卖股票')
    console.log('===============')
    g1.sell()
    g2.sell()
    g3.sell()
    g4.sell()
    g5.sell()
    g6.sell()
    g7.sell()
    g8.sell()
    g9.sell()
    g10.sell()
  }
}

new Main()
