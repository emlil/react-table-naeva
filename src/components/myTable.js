import  React, {Component} from "react"
import ReactDOM from 'react-dom';

const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.net_worth - b.net_worth
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.net_worth - a.net_worth
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
};

const apiUrl= "http://www.omdbapi.com/?apikey=4486ae48&s=";

class MyTable extends  Component{
	 constructor(props){
		super(props);
			this.state ={
				search:props.search,
				list:[],
				vals:[],
				currentsort:'default',
				compiledTable:[]
			}
	}
	componentDidMount() {
		this.getDataFromApi(this.state.search)
			.then(data => {
				let theList = this.objToArray(data);
				this.setState({
					list: theList,
					vals: Object.keys(data[0])
				})
				console.log(theList);
			})
	}

	objToArray(arr) {
		return arr.map(x=>Object.values(x))
	}

	async getDataFromApi(name) {
		var data = await fetch(apiUrl+name)
			.then(response => response.json())
			.then(response =>response.Search);
		return data;
	}

	renderCol(col) {
		if(col.includes(".jpg"))
			return <td><img src={col} alt={col} /></td>;
		return <td>{col}</td>
	}

	renderItem(item) {

		return <tr>{item.map(this.renderCol)}</tr>
	}
	renderHead(item) {

		return <th>{item}</th>
	}

	render() {
		return(
			<table>
				<thead id="theHead">
					<tr>
						{this.state.vals.map(this.renderHead.bind(this))}
					</tr>
				</thead>
				<tbody id="theBod">
				{this.state.list.map(this.renderItem.bind(this))}
				</tbody>
			</table>
		)
	}
}
export default MyTable
