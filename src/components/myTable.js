import  React, {Component} from "react"
import ReactDOM from 'react-dom';

const apiUrl= "http://www.omdbapi.com/?apikey=4486ae48&s=";

class MyTable extends  Component{
	 constructor(props){
		super(props);
			this.state ={
				search:props.search,
				list:[],
				keys:[],
				compiledTable:` <table style="width:100%">
								  <tr>
									<th>Firstname</th>
									<th>Lastname</th>
									<th>Age</th>
								  </tr>
 
								</table> `
			}
	}
	componentDidMount() {
		this.getDataFromApi(this.state.search)
			.then(data => {
				let theList = this.objToArray(data);
				this.setState({
					list: theList,
					keys: Object.keys(data[0])
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
	 	return <td>{col}</td>
	}

	renderItem(item) {
		return <tr>{item.map(this.renderCol)}</tr>
	}

	render() {
		console.log(this.state.compiledTable);
		return(
			<table>
				<tbody id="theBod">
				{this.state.list.map(this.renderItem.bind(this))}
				</tbody>

			</table>
		)
	}
}
export default MyTable
