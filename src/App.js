import React from 'react';
import './App.css';
import MyTable from './components/myTable';
import utils from "./utils"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";


class App extends React.Component {

	state = {
		list: [],
		showModal: false,
		modalData: {}
	};

	async createModal(item){
		let data = await utils.getDistinctmovie(item);
		const mod =
			<Modal show={true}>
			<Modal.Dialog>
				<ModalHeader closeButton={()=>this.closeModal()}>
					<ModalTitle>{data.Title}</ModalTitle>
				</ModalHeader>
				<Modal.Body>
					<div>
						<li>Year: {data.Year}</li>
						<li>Rated: {data.Rated}</li>
						<li>Runtime:{data.Runtime} </li>
					</div>
					<div>
						<p>{data.Plot}</p>
					</div>
				</Modal.Body>

			</Modal.Dialog>;
			</Modal>;
		document.getElementById("modalDiv").innerText=mod;

		this.state.modalData= mod;
		this.state.showModal= true;

	}
	closeModal(){
		this.setState(
			{
				modalData:{},
				showModal:false
			}
		);
		// this.state.modalData={};
		// this.state.showModal= false;

	}

	sortByCol(index) {
		let copy = [...this.state.list.list];
		if (this.state.list.sortBy === index) {
			console.log("reverse" + index + this.state.list.sortBy);
			this.setState({
				list: {
					list: copy.reverse(),
					vals: this.state.list.vals,
					sortBy: index
				}
			})

		} else {
			console.log("SORT", copy);
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

	async componentDidMount() {

		// let list = await utils.getMovieList("Rush+Hour");
		// this.setState({list});
	}

	async search() {
		this.setState({list: {}});
		let x = document.getElementById("input").value;
		let list = await utils.getMovieList(x.replace(" ", "+"));
		console.log("søk", list);
		this.setState({list});
	}

	render() {
		return (
			<div className="App">
				<header>Test</header>
				<div id="modalDiv">
					{()=>{
						if 
					}}
				</div>
				<div>
					<p>Search for a movie: </p>
					<input id={"input"} defaultValue="titanic"/>
					<button onClick={() => this.search()}>Søk</button>
				</div>
				<div>
					<div id="leftPart"></div>
					<MyTable elem={this.state.list} onSort={this.sortByCol.bind(this)} moreInfo={this.createModal.bind(this)}/>
					<div id="rightPart"></div>
				</div>
			</div>

		);
	}
}

export default App;
