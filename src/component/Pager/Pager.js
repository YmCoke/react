import React from 'react';
import PropTypes from 'prop-types';
import './Pager.css';

export default class Pager extends React.Component {
    static propTypes = {
        current: PropTypes.number.isRequired,       // 当前页码
        total: PropTypes.number.isRequired,         // 总条数
        limit: PropTypes.number.isRequired,         // 每页做多数据条数
        panelNumber: PropTypes.number.isRequired,   // 最多多少页码
        onPageChange: PropTypes.func.isRequired,    // 触发翻页事件
    }

    init () {
        this.allPage = this.getAllPage();
        this.pageList = this.getPageList();
    }

    getPageList () {
        const min = this.getMinPage();
        const max = this.getMaxPage(min);
        const pageList = new Array(max - min + 1);
        for (let i = min; i <= max; i++) {
            pageList[i] = <span className={this.props.current === i ? "item active" : "item"}
                                key={i}
                                onClick={ _ => this.pageChange(i)}>{i}</span>
        }
        return pageList;
    }

    pageChange (newPage) {
        if (this.props.current === newPage) return;
        if (newPage < 1) return;
        if (newPage > this.allPage) return;
        this.props.onPageChange && this.props.onPageChange(newPage);
    }

    getAllPage () {
        return parseInt( (this.props.total + this.props.limit - 1) / this.props.limit );
    }

    getMinPage () {
        const min = this.props.current - Math.floor( this.props.panelNumber / 2 );
        return min < 1 ? 1 : min;
    }

    getMaxPage (min) {
        const max = min + this.props.panelNumber - 1;
        return max > this.allPage ? this.allPage : max;
    }

    render () {
        this.init();
        return <>
            <span className={this.props.current === 1 ? 'item disabled' : 'item'}
                  onClick={ _ => this.pageChange(1)}>首页</span>
            <span className={this.props.current === 1 ? 'item disabled' : 'item'}
                  onClick={ _ => this.pageChange(this.props.current - 1)}>上一页</span>
            {this.pageList}
            <span className={this.props.current === this.allPage ? 'item disabled' : 'item'}
                  onClick={ _ => this.pageChange(this.props.current + 1)}>下一页</span>
            <span className={this.props.current === this.allPage ? 'item disabled' : 'item'}
                  onClick={ _ => this.pageChange(this.allPage)}>尾页</span>
            <span className="current">
                {this.props.current}
                /
                {this.allPage}
            </span>
        </>
    }
}