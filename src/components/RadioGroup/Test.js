import React from 'react';
import RadioGroup from "./index";

export default class Test extends React.Component {
    state = {
        datas: [
            {value: 'movie', text: '电影'},
            {value: 'basketball', text: '篮球'},
            {value: 'football', text: '足球'},
            {value: 'other', text: '其他'},
        ],
        name: 'hobby',
        choose: 'movie'
    }

    handleChange = newChoose => {
        this.setState({
            choose: newChoose
        })
    }

    render () {
        return (<div>
            <RadioGroup {...this.state} onChange={this.handleChange}/>
        </div>)
    }
}