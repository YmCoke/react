import React, {Component} from 'react';
import "./index.css";

export default class FilterbaleProductTable extends Component {
    state = {
        searchWord: "",
        isShowUnStocked: true,
    }

    stockedChange = (bool) => {
        this.setState({
            isShowUnStocked: !bool
        })
    }

    inputChange = (newVal) => {
        this.setState({
            searchWord: newVal
        })
    }

    render () {
        return <div className="container">
            <SearchBar searchWord={this.state.searchWord} isShowUnStocked={this.state.isShowUnStocked}
                       inputChange={this.inputChange} stockedChange={this.stockedChange}/>
            <ProductTable products={this.props.products} searchWord={this.state.searchWord} isShowUnStocked={this.state.isShowUnStocked}/>
        </div>
    }
}


export class SearchBar extends Component {
    render () {
        return <div className="searchBar-container">
            <div className="search">
                <input type="text" placeholder="Searching..." value={this.props.searchWord}
                       onChange={(e) => this.props.inputChange(e.target.value)}/>
            </div>
            <div className="stacked">
                <label>
                    <input type="checkbox" checked={!this.props.isShowUnStocked}
                           onChange={(e) => this.props.stockedChange(e.target.checked)}/>
                    Only show products in stock
                </label>
            </div>
        </div>
    }
}


export class ProductTable extends Component {
    render () {
        return (<table className="product-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductTableBody products={this.props.products} searchWord={this.props.searchWord} isShowUnStocked={this.props.isShowUnStocked}/>
            </tbody>
        </table>)
    }
}


export class ProductTableBody extends Component {
    render () {

        let lastCategory = null;
        const rows = [];
        this.props.products.forEach(item => {

            if (this.props.isShowUnStocked === false && item.stocked === false) return;
            if (this.props.searchWord !== "" && item.name.indexOf(this.props.searchWord) === -1) return;

            if (item.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={item.category} key={item.category}/>)
                lastCategory = item.category;
            }
            rows.push(<ProductRow name={item.name} price={item.price} stocked={item.stocked} key={item.name}/>)
        })

        return (
            <>
                {rows}
            </>
        )
    }
}


export class ProductCategoryRow extends Component {
    render () {
        return (
            <tr>
                <td colSpan={2}>{this.props.category}</td>
            </tr>
        )
    }
}


export class ProductRow extends Component {
    render () {
        return (
            <tr>
                <td className={this.props.stocked ? "" : "un-stocked"}>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}

