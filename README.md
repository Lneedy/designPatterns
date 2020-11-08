# JavaScript 设计模式

## 目录

- 简单工厂模式
- 工厂模式
- 策略+简单工厂模式
- 装饰器模式
- 原型模式
- 模板模式
- 外观模式（demo11 + demo12）
- 建造者模式

## 依赖倒置原则

- 高层模块不应该依赖低层模块，两者都应该依赖抽象
- 抽象不应该依赖细节
- 细节应该依赖抽象


## 外观模式 (Facade)

为子系统中的一组接口 提供一个一致的界面， 此模式定义一个高层接口， 这个接口使得这一子系统更加容易使用

#### 关系

- Main(客户端)
- Facade (外观类): 将客户端的请求代理给对应的 子系统
- SubSystemClasses (子系统类集合): 处理"外观类"指派的任务
- SubSystem (子系统类): "子系统类"不包含"外观类"的任何信息

## 建造者模式

将复杂对象的构建与他的表现分离， 使得同样的构建过程可以创建不同的表示, 当创建复杂对象的算法应该独立于改对象的组成部分以及装配方法时适用

#### 关系

- Main (客户端)
- Builder （建造者接口抽象）： 为创建Product对象的抽象接口
- Director （指挥者类）：根据用户需求，提供构建 Product部分的过程
- ConcreateBuilder （具体建造者类）：实现构造具体的Product功能
- Product (具体产品类)： 存储产品需要的部分，将部分装配在一起



