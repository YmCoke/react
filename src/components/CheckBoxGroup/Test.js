import React from 'react';
import CheckBoxGroup from "./index";

export default class Test extends React.Component {
    state = {
        datas: [
            {value: 'football', text: '足球'},
            {value: 'basketball', text: '篮球'},
            {value: 'movie', text: '电影'},
            {value: 'other', text: '其他'},
        ],
        name: 'hobby',
        choose: ['football', 'basketball'],
    }
    handleChange = newArr => {
        this.setState({
            choose: newArr
        })
    }
    render () {
       return (<div>
           <CheckBoxGroup {...this.state} onChange={this.handleChange}/>
       </div>)
    }
}