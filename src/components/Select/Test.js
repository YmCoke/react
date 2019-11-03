import React from 'react';
import Select from "./index";

export default class Test extends React.Component {
    state = {
        datas: [
            {value: 'movie', text: '电影', id: '0001'},
            {value: 'basketball', text: '篮球', id: '0002'},
            {value: 'football', text: '足球', id: '0003'},
            {value: 'other', text: '其他', id: '0004'},
        ],
        name: 'hobby',
        value: 'other'
    }

    handleChange = value => {
        console.log(value);
        this.setState({
            value: value
        })
    }

    render () {
        return (<div>
            <Select {...this.state} onChange={this.handleChange}/>
        </div>)
    }
}