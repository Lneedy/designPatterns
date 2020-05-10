/*
 * @Author: lneedy
 * @Date: 2020-03-31 09:13:02
 * @LastEditTime: 2020-04-01 00:06:55
 * @LastEditors: Please set LastEditors
 * @Description: 帮人送快递-代理模式
 * @FilePath: \design-patterns\src\demo7\index.js
 */

 // 送快递 仿接口类
class Interface {
  // 送书
  giveBooks () {}
  // 送水
  giveWater () {}
  // 送零食
  giveFoot () {}
}

// 淘宝店家
class Seller extends Interface{
  // 送给买家
  constructor (buyer) {
    super()
    this.buyer = buyer
  }

  giveBooks () {
    if (this.buyer != null) {
      console.log(this.buyer.name, '买的一些书给你送过来了!')
    }
  }

  giveWater () {
    if (this.buyer != null) {
      console.log(this.buyer.name, '买的一些饮用水给你送过来了!')
    }
  }

  giveFoot () {
    if (this.buyer != null) {
      console.log(this.buyer.name, '买的一些零食给你送过来了!')
    }
  }
}

// 快递公司
class Courier   {
  proxy (buyer) {
    this.seller = new Seller(buyer)
  }
  giveBooks () {
    if (this.seller != null) {
      this.seller.giveBooks()
    }
  }

  giveWater () {
    if (this.seller != null) {
      this.seller.giveWater()
    }
  }

  giveFoot () {
    if (this.seller != null) {
      this.seller.giveFoot()
    }
  }
}

// 买家
class Buyer {
  constructor (name) {
    this.name = name
  }
}
// 买家
let buyer = new Buyer('lzx')
// 快递公司(代理)
let sf = new Courier()
//  代理送货
sf.proxy(buyer)

sf.giveBooks()
sf.giveWater()
sf.giveFoot()