import  React, {Component} from "react"
import utils from "../utils"


class MyTable extends  Component{
	 constructor(props){
		super(props);
			this.state ={
				search:props.search,
				list:[],
				vals:[],
			}
	}
	componentDidMount() {
		utils.getDataFromApi(this.state.search)
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
			<table id={"inf"}>
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
