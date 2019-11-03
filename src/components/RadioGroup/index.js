import React from 'react';

/**
 * 完全非受控组件
 * */
export default function RadioGroup (props) {
    const rs = _getRadioList(props);
    return (rs);
}

function _getRadioList (props) {
    return props.datas.map(item => (<label key={item.value}>
        <input type="radio" name={props.name} value={item.value}
               checked={props.choose === item.value}
               onChange={(e) => _handleChange(e, item, props)}/>
        {item.text}
    </label>))
}

function _handleChange (e, item, props) {
    props.onChange && props.onChange(item.value, e);
}