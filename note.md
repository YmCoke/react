# action

1. action必须是一个paint object 
    (该对象的__proto__必须是Object.prototype[即没有复杂的原型链])
2. type属性
    1. action的type属性不可缺少
    2. action的type属性的类型没有要求
3. 通常, 使用payload属性表示附加数据(没有强制要求)
4. 在**大型项目**中, 由于操作类型非常多, 为了避免硬编码(hard code), 
会将action的类型存放到一个或一些单独的文件中(称为样板代码)
5. 为了方便传递action, 通常会使用action创建函数(action creator)来创建action
    1. action创建函数应为无副作用的纯函数
        1. 不能以任何形式改动参数
        2. 不可以有异步
        3. 不可以对外部环境中的数据造成影响
6. 为了方便使用action创建函数来分发(触发)action, redux提供了一个函数```bindActionCreators```, 该函数用于增强action
创建函数的功能, 使他不仅可以创建action, 并且创建后会自动完成分发.
    bindActionCreators
        1. 参数1: 一个由action创建函数组成的对象
        2. 参数2: 仓库的dispatch函数
        3. 返回值: 一个属性名与参数1相同的对象.
    **通过该返回值对象上的action创建函数可以直接将创建的action进行分发** 