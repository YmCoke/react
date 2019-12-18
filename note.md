# Reducer

Reducer是用於改變數據的函數

1. 一个数据仓库, 有且仅有一个reducer, 并且通常情况下, 一个工程只有一个仓库. 因此, 一个系统只有一个reducer
2. 为了方便管理, 通常会将reducer放到单独的文件中
3. reducer被调用的时机
    1. 通过store.dispatch, 分发一个action, 此时, 会调用reducer
    2. 当创建一个store的时候, 会调用一次reducer
        1. 可以利用这一点, 用reducer对数据仓库store进行数据初始化
        2. 创建仓库时, 不传递任何默认状态
        3. 为reducer的参数state设置一个默认值
4. reducer内部经常使用switch来判断type值
5. **reducer必须是一个没有副作用的纯函数**
    1. 为什么需要纯函数
        1. 纯函数有利于测试和调试
        2. 有利于还原数据
        3. 有利于将来和react结合时的优化
    2. 具体要求
        1. 不能改变参数, 因此若要让数据仓库中的数据变化, 必须得到一个新的值, 将原有的值进行覆盖
        2. 不能有异步
        3. 不能对外部环境造成影响
6. 由于在大中型项目中, 操作比较复杂, 数据结构也比较复杂. 因此需要对reducer进行细分.
    1. redux提供了一个方法, 可以帮助我们更加方便地合并reducer -- combineReducers