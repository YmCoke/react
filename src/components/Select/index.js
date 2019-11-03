import React from 'react';

export default function Select (props) {
    const options = _getOptions(props);
    return (<select name={props.name} value={props.value}
                    onChange={e => _handleChange(e, props)}>
        {options}
    </select>)
}

function _getOptions (props) {
    return props.datas.map(item => <option key={item.id} value={item.value}>
        {item.text}
    </option>)
}

function _handleChange (e, props) {
    props.onChange && props.onChange(e.target.value, e);
}