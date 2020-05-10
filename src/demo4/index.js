/*
 * @Author: lneedy
 * @Date: 2020-03-22 15:23:28
 * @LastEditTime: 2020-03-23 09:33:52
 * @LastEditors: Please set LastEditors
 * @Description: 商场收银-普通模式
 * @FilePath: \design-patterns\src\demo2\index.js
 */
const chalk = require('chalk');
/**
 * @description: 收银
 * @param {type}
 * @return:
 */
class Cashier {
  constructor() {
    // 总总计
    this.total_price = 0.0;
    // 商品详情
    this.products_details = [];
    // 优惠券
    this.coupon = [];
  }

  // 记录
  record(unt, amount, coupon = '') {
    // 合计
    let total = unt * amount;
    this.products_details.push({
      coupon,
      total,
      unt,
      amount
    });
  }

  // 获取小票信息
  getProductsDetails() {
    let result = '';

    this.products_details.map(v => {
      let {coupon, total, unt, amount} = v;
      const couponObj = CouponFactory.createCoupon(coupon);
      let params = [];
      let time = {};
      switch (v.coupon) {
        // 满300减100
        case '1':
          let limit = 300;
          let quota = 100;
          time = {
            start_date: '2020-02-30',
            end_date: '2020-12-30'
          };
          // params = [price, limit, quota, time]
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
          break;
        default:
          params = [total];
          break;
      }
      v.total = couponObj.use(...params);
      result += `单价: ${unt} 数量: ${amount} ${couponObj.message} 总计: ${v.total}\n`;
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
    this.message = '正常收费';
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
      return (price -= quota);
    } else {
      return price;
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
      return (price *= temp);
    } else {
      return price;
    }
  }
}

// 工厂模式
class CouponFactory {}

CouponFactory.createCoupon = function(type) {
  let coupon = null;
  switch (type) {
    case '1':
      coupon = new CouponFullreduce();
      break;
    case '2':
      coupon = new CouponDiscount();
      break;
    default:
      coupon = new Coupon();
      break;
  }
  return coupon;
};

let counter = new Cashier();
counter.record(100, 5, '1');
counter.record(990, 3, '2');
counter.record(50, 4);
// counter.reset();
console.log(counter.getProductsDetails());
console.log(chalk.green('$'), '结果是: ', counter.sum());
