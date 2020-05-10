/*
 * @Author: lneedy
 * @Date: 2020-03-22 15:23:28
 * @LastEditTime: 2020-03-24 15:16:49
 * @LastEditors: Please set LastEditors
 * @Description: 商场收银-策略+简单工厂模式
 * @FilePath: \design-patterns\src\demo2\index.js
 */
const chalk = require('chalk');
/**
 * @description: 收银
 * @param {type}
 * @return:
 */
class Cashier {
  constructor(products) {
    // 当前店的商品管理类
    this.products = products
    // 合计
    this.total_price = 0.0;
    // 商品详情
    this.products_details = [];
  }

  // 记录
  record(name, unt, amount) {
    // 合计
    let total = unt * amount;
    // 记录商品信息
    this.products_details.push({
      name,
      unt,
      amount,
      total
    });
  }

  // 获取小票信息
  getProductsDetails() {
    let result = '';
    const ct = new Context(this.products)
    this.products_details.map(v => {``
      let {name, total, unt, amount} = v;
      let coupon = ct.getResult(name, total)
      total = v.total = coupon.price
      let message = coupon.type === '0'? coupon.message: chalk.red(coupon.message)
      name = chalk.green(name)
      unt = chalk.green(unt)
      amount = chalk.green(amount)
      total = chalk.green(total)
  
      result += `商品: ${name} 单价: ${unt} 数量: ${amount} ${message} 总计: ${total}\n`;
    });
    return result;
  }

  // 获取合计
  sum() {
    let total = 0.0;
    this.products_details.map(v => {
      // 有优惠
      if (v.type !== -1) {
      }
      total += v.total;
    });
    return total;
  }
  // 重置
  reset() {
    this.total_price = 0.0;
    this.products_details = [];
  }
}

// 优惠卷
class Coupon {
  constructor() {
    // 类型
    this.type = '';
    // 描述
    this.message = '';
    // 有效时间
    this.time = {
      start_date: '0000-00-00',
      end_date: '0000-00-00'
    };
  }

  // 使用
  use(price) {
    return price;
  }
}

// 正常收费
class CouponNormal extends Coupon {
  use(price) {
    // 类型
    this.type = '0';
    // 描述
    this.message = '正常收费';
    // 有效时间
    this.time = {
      start_date: '0000-00-00',
      end_date: '0000-00-00'
    }
    return Object.assign(this, {price})
    }
}

// 满减
class CouponFullreduce extends Coupon {
  use(price, limit, quota, time) {
    let flag =
      +new Date(time.start_date) < +new Date() &&
      +new Date() < +new Date(time.end_date);
    // 如果 消费金额达到限制条件
    if (price >= limit && flag) {
      this.type = '1';
      this.message = `满${limit}减${quota}`;
      return Object.assign(this, {price: price -= quota});
    } else {
      this.message = `正常收费`
      return Object.assign(this, {price});
    }
  }
}

// 打折
class CouponDiscount extends Coupon {
  use(price, discount, time) {
    let flag =
      +new Date(time.start_date) < +new Date() &&
      +new Date() < +new Date(time.end_date);
    if (flag) {
      this.type = '2';
      this.message = `打${discount}折`;
      let temp = discount / 10;
      return Object.assign(this, {price: (price *= temp)});
    } else {
      this.message = `正常收费`
      return Object.assign(this, {price});
    }
  }
}

// 商品类
class Product {
  constructor () {
    // 自增id
    this.id = 0
    // 商品
    this.products = []
  }
  // 导入商品
  import(products) {
    // 批量导入商品信息
    for (let i = 0, a = products; i < a.length; i ++) {
      let {type, name} = a[i]
      this.create(name, type)
    }
  }

  // 创建商品
  create(name = '', type= '0') {
    this.products.push ({
      // 促销类型
      type,
      // 商品id
      id: ++this.id,
      // 商品名称
      name
    })
  }
  // 获取单个商品
  getOne(name) {
    let product = {}
    for (let i = 0, arr = this.products; i < arr.length; i++) {
      if (arr[i].name === name) {
        product = arr[i]
      }
    }
    return product
  }
  // 获取全部商品
  getAll() {
    return this.products
  }
}

// 策略处理
class Context {
  constructor (product) {
    this.product = product
  }
  getResult(name, total) {
    let coupon = null;
    let params = [];
    let time = {};
    let product = this.product.getOne(name)
    let type = product.type
    switch (type) {
      // 满300减100
      case '1':
        coupon = new CouponFullreduce();
        let limit = 300;
        let quota = 100;
        time = {
          start_date: '2020-02-30',
          end_date: '2020-12-30'
        };
        params = [total, limit, quota, time];
        break;
        // 打8折
      case '2':
        let discount = 8;
        time = {
          start_date: '2020-02-30',
          end_date: '2020-12-30'
        };
        params = [total, discount, time];
        coupon = new CouponDiscount();
        break;
      // 正常收费
      default:
        params = [total];
        coupon = new CouponNormal();
        break;
    }
    return coupon.use(...params);
  }
}


let product = new Product()
// 商店的全部商品
let shopProducts = [
  {
    type: '1',
    name: '红三角裤'
  },
  {
    type: '2',
    name: '蕾丝内裤'
  },
  {
    type: '0',
    name: '平四角裤'
  },
]
// 批量导入商品
product.import(shopProducts)

// 收银员开始操作
let counter = new Cashier(product);
// 开始记录购买的商品
counter.record('红三角裤', 100, 5);
counter.record('蕾丝内裤', 990, 3);
counter.record('平四角裤', 50, 4);
// 重置
// counter.reset();
// 获取小票信息
console.log(counter.getProductsDetails());
// 总计
console.log(chalk.green('$'), '结果是: ', chalk.green(counter.sum()));
