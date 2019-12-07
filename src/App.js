import React from 'react';
import './App.css';
import MyTable from './components/myTable';
import utils from "./utils"
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from './components/myModal'


class App extends React.Component {

	state = {
		list: [],
		showModal: false,
		modalData: {}
	};

	async updateModal(item) {
		let data = await utils.getDistinctmovie(item);
		this.setState({
			modalData: data,
			showModal: true
		});
	}

	sortByCol(index) {
		let copy = [...this.state.list.list];
		if (this.state.list.sortBy === index) {
			this.setState({
				list: {
					list: copy.reverse(),
					vals: this.state.list.vals,
					sortBy: index
				}
			})

		} else {
			copy.sort((a, b) => {
				if (a[index] < b[index])
					return -1;
				if (a[index] > b[index])
					return 1;
				else return 0;

			});
			this.setState({
				list: {
					list: copy,
					vals: this.state.list.vals,
					sortBy: index
				}
			});
		}
	}

	async search() {
		this.setState({list: {}});
		let x = document.getElementById("input").value;
		let list = await utils.getMovieList(x.replace(" ", "+"));
		this.setState({list});
	}

	render() {
		return (
			<div className="App">
				<header><h1>OmdbAPI GUI</h1></header>
				<div id="modalDiv">
					<MyModal elem={this.state.modalData} show={this.state.showModal}
							 onClose={() => this.setState({showModal: false})}/>
				</div>
				<div id="inputDiv">
					<p>Search for a movie: </p>
					<input id={"input"} defaultValue="titanic"/>
					<Button variant="light" onClick={() => this.search()}>Søk</Button>
				</div>
				<div>
					<div id="leftPart"></div>
					<MyTable elem={this.state.list} onSort={this.sortByCol.bind(this)}
							 moreInfo={this.updateModal.bind(this)}/>
					<div id="rightPart"></div>
				</div>
			</div>

		);
	}
}

export default App;
