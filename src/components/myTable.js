import React, {Component} from "react"
import app from "../App";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";


class MyTable extends Component {
	constructor(props) {
		super(props);
	}

	renderCol(col) {
		// alt egenskapen til img håndterer tilfellene hvor det faktisk bare er en tekststreng som inneholder ".jpg"
		if (col.toLowerCase().includes(".jpg"))
			return <td><Image className={"thumb"} src={col} alt={col}/></td>;
		return <td>{col}</td>
	}

	renderItem(item) {
		return <tr onClick={()=>(this.props.moreInfo(item[2]))}>{item.map(this.renderCol)}</tr>
	}

	renderHead(item, index) {
		return <th onClick={() => (this.props.onSort(index))}>{item}</th>
	}


	render() {

		if (this.props.elem === undefined || this.props.elem.list === undefined)
			return null;
		// Check if no data
		if (!this.props.elem || Object.keys(this.props.elem).length === 0) return (<p>Loading...</p>);
		return (
			<Table striped hover variant="dark" id={"inf"}>
				<thead id="theHead">
				<tr>
					{this.props.elem.vals.map(this.renderHead.bind(this))}
				</tr>
				</thead>
				<tbody id="theBod">
				{this.props.elem.list.map(this.renderItem.bind(this))}
				</tbody>
			</Table>
		)
	}
}

export default MyTable
