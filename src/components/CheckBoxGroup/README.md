## 属性

1. datas[数组]: 数组每一项是一个对象, 对应一个多选框
    1. 对象具有value, text, id属性
    2. value多选框的值
    3. text多选框的文本
    4. id是唯一值
    
2. name[字符串]: 多选框的name属性
3. choose[数组]: 默认初始选中的值, 对应datas对象中的id值
4. onChange[函数]: 事件, 当点击多选框时触发.