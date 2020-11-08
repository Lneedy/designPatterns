/*
 * @Author: your name
 * @Date: 2020-04-11 10:50:25
 * @LastEditTime: 2020-04-11 11:10:02
 * @LastEditors: Please set LastEditors
 * @Description: 炒股--外观模式
 * @FilePath: \design-patterns\src\demo12\index.js
 */

 // 外观类
class Facade  {
  // 股票
  g1;
  g2;
  g3;
  g4;
  g5;
  g6;
  g7;
  g8;
  g9;
  g10;
  people;
  constructor () {
    this.g1 = new Stock1()
    this.g2 = new Stock2()
    this.g3 = new Stock3()
    this.g4 = new Stock4()
    this.g5 = new Stock5()
    this.g6 = new Stock6()
    this.g7 = new Stock7()
    this.g8 = new Stock8()
    this.g9 = new Stock9()
    this.g10 = new Stock10()
  }

  // 稳牛基金组合
  FacadeMethods1 (people, type='buy') {
    console.log(`${people}投资稳牛基金组合`)
    console.log('=================')
    this.g1[type] && this.g1[type]()
    this.g3[type] && this.g3[type]()
    this.g5[type] && this.g5[type]()
    this.g7[type] && this.g7[type]()
    this.g9[type] && this.g9[type]()
    console.log('\n')
  }
  // 国泰民安组合
  FacadeMethods2 (people, type='buy') {
    console.log(`${people}投资国泰民安组合`)
    console.log('=================')
    this.g2[type] && this.g2[type]()
    this.g4[type] && this.g4[type]()
    this.g6[type] && this.g6[type]()
    this.g8[type] && this.g8[type]()
    this.g10[type] && this.g10[type]()
    console.log('\n')
  }
  // 一直牛市组合
  FacadeMethods3 (people, type='buy') {
    console.log(`${people}投资一直牛市组合`)
    console.log('=================')
    this.g1[type] && this.g1[type]()
    this.g2[type] && this.g2[type]()
    this.g3[type] && this.g3[type]()
    this.g4[type] && this.g4[type]()
    this.g5[type] && this.g5[type]()
    this.g6[type] && this.g6[type]()
    this.g7[type] && this.g7[type]()
    this.g8[type] && this.g8[type]()
    this.g9[type] && this.g9[type]()
    this.g10[type] && this.g10[type]()
    console.log('\n')
  }
}

// 股票 （子系统集合类）
class Stock {
}
// 指标股 （子系统功能类）
class Stock1 extends Stock {
  sell () {
    console.log('卖指标股')
  }
  buy () {
    console.log('买指标股')
  }
}

// 金融证券保险（子系统功能类）
class Stock2 extends Stock {
  sell () {
    console.log('卖金融证券保险股')
  }
  buy () {
    console.log('买金融证券保险股')
  }
}

// 地产（子系统功能类）
class Stock3 extends Stock {
  sell () {
    console.log('卖地产股')
  }
  buy () {
    console.log('买地产股')
  }
}

// 航空（子系统功能类）
class Stock4 extends Stock {
  sell () {
    console.log('卖航空股')
  }
  buy () {
    console.log('买航空股')
  }
}


// 钢铁（子系统功能类）
class Stock5 extends Stock {
  sell () {
    console.log('卖钢铁股')
  }
  buy () {
    console.log('买钢铁股')
  }
}

// 煤炭（子系统功能类）
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

// 电力能源（子系统功能类）
class Stock8 extends Stock {
  sell () {
    console.log('卖电力能源股')
  }
  buy () {
    console.log('买电力能源股')
  }
}

// 汽车（子系统功能类）
class Stock9 extends Stock {
  sell () {
    console.log('卖汽车股')
  }
  buy () {
    console.log('买汽车股')
  }
}

// 有色金属（子系统功能类）
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
    let facade = new Facade()
    let people = '有钱人';
    let people2 = '中产';
    let people3 = '小资';
    facade.FacadeMethods1(people3)
    facade.FacadeMethods2(people2)
    facade.FacadeMethods3(people)
  }
}

new Main()
// result:
// 小资投资稳牛基金组合
// =================
// 买指标股
// 买地产股
// 买钢铁股
// 买重工机械股
// 买汽车股


// 中产投资国泰民安组合
// =================
// 买金融证券保险股
// 买航空股
// 买煤炭股
// 买电力能源股
// 买有色金属股


// 有钱人投资一直牛市组合
// =================
// 买指标股
// 买金融证券保险股
// 买地产股
// 买航空股
// 买钢铁股
// 买煤炭股
// 买重工机械股
// 买电力能源股
// 买汽车股
// 买有色金属股