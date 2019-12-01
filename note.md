# 导航守卫

导航守卫: 当离开一个页面, 要进入另一个页面的前一刻, 触发的事件

history对象

- listen: 添加一个监听器, 监听地址的变化, 当地址变化的时候, 会调用传递的函数
    - 参数: 函数 (运行时间点: 发生在即将跳转到新页面时)
        - 参数1: location对象, 记录新的地址信息
        - 参数2: action, 一个字符串, 表示进入该地址的方式
            - POP: 出栈(表示浏览器历史记录栈中的指针发生变化)
                1. 通过点击浏览器后退, 前进
                2. 调用history.go
                3. 调用history.goBack
                4. 调用history.goForward
            - PUSH: 入栈
                1. 凡底层使用了history.push
            - REPLACE: 替换
                1. 凡底层使用了history.replace
    - 返回结果: 函数, 可以调用该函数取消监听
        - 使用场景
            1. 组件卸载时执行
            2. 暴露到外界, 由使用者决定何时取消监听

**细节**            
    1. 向当前页面进行跳转, react-router也会该页面路径再次添加到浏览器历史记录栈中. 也就是说listen事件会被触发**
    1. 多次使用listen会叠加而不是覆盖, 底层类似于使用addEventListener.
            
- block: 设置一个阻塞, 并同时设置阻塞消息, 当页面发生跳转时, 会进入阻塞, 并将阻塞消息传递给getUserConfirmation方法
    - 参数:
        1. 字符串: 作为阻塞消息直接传递给getUserConfirmation方法中
        2. 函数
            1. 参数1: location对象, 记录新的地址信息
            2. 参数2: action, 表示进入新地址的方式
            3. 返回结果: 作为阻塞信息传递给getUserConfirmation方法中
            
**注意: block为函数时, 返回结果必须是字符串**
            
路由根组件[BrowserRouter / HasRouter]

- getUserConfirmation
    - 参数: 函数
        1. 参数1: 阻塞信息(由history.block传递的阻塞信息)
        2. 参数2: 回调函数[该回调接收一个参数, 为true进入新页面, 反之不进入新页面]
            
**注意: 只有执行了history.block函数, getUserConfirmation函数才会执行. 否则无阻塞.**

### ```监听器```

- RouterListenGuard

使用history.listen方法, 监听location路径的变化.

### ```拦截器```

- RouterBlockGuard

使用history.block方法和Router根组件上的getUserConfirmation方法相互配合. 实现对指定路径进行拦截.

**总结**

监听器和拦截器作为导航守卫的不同功能, 都是一个组件. 但它是功能性组件, 并不作任何ui渲染. 起到了横切关注点的作用.