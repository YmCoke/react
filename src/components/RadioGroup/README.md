### 属性

1. datas[数组]: 每一个元素是一个对象, 每一个对象对应一个单选框
    1. 具有value, text, id属性
    2. value属性值
    3. text文本
    4. id唯一索引
3. name[字符串]: 作为name属性的值
4. choose[字符串]: 当前选中的值, 对应datas对象中的id值
5. onChange[函数]: 事件, 当点击单选框时触发