import React from 'react';

/**
 * 完全非受控组件
 * */
export default function CheckBoxGroup (props) {
    const bs = _getCheckBoxList(props);
    return (bs)
}

// 渲染多选框组件
function _getCheckBoxList (props) {
    return props.datas.map(item => <label key={item.value}>
        <input type="checkbox" name={props.name} value={item.value}
               checked={props.choose.includes(item.value)}
               onChange={ e => _handleChange(e, item, props) }
        />
        {item.text}
    </label>)
}

// 触发点击多选框事件[将新的选中多选框的数组集合抛出]
function _handleChange (e, item, props) {
    let newArr;
    if (e.target.checked) {
        newArr = [...props.choose, item.value]
    } else {
        newArr = props.choose.filter(it => it !== item.value)
    }
    props.onChange && props.onChange(newArr, e);
}