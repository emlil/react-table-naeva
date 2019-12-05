import  React, {Component} from "react"


class MyTable extends  Component{
	 constructor(props){
		super(props);
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

		return <th onClick={}>{item}</th>
	}

	render() {
	 	console.log("Props", this.props.elem );

	 	if(this.props.elem === undefined || this.props.elem.list === undefined)
	 		return (<p>No data to show</p>);
	 	// Check if no data
		if(!this.props.elem || Object.keys(this.props.elem).length === 0) return (<p>Loading...</p>);

		return(
			<table id={"inf"}>
				<thead id="theHead">
					<tr>
						{this.props.elem.vals.map(this.renderHead.bind(this))}
					</tr>
				</thead>
				<tbody id="theBod">
				{this.props.elem.list.map(this.renderItem.bind(this))}
				</tbody>
			</table>
		)
	}
}
export default MyTable
