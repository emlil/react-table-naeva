import React, {Component} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";



class myModal extends React.Component{

	constructor(props){
		super(props);
			this.setState(
				{
					visible:false
				}
			)
	}
	componentDidMount() {
		this.state={
			visible:this.props.showModal
		}
		console.log(this.state.visible);
	}

	closeModal(){
		console.log("foo")
	let elem=document.getElementById("theModal");
	elem.show= false;

	}
	render() {
		if(!this.props.show){
			return null;
		}
		let data = this.props.elem;

		return (
			<Modal id="theModal" show={true}>
				<Modal.Dialog>
					<Modal.Header closeButton={()=>this.closeModal()}>
						<Modal.Title>{data.Title}</Modal.Title>
					</Modal.Header>
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
					<Modal.Footer>

						<Button variant="primary" data-dismiss="modal" onClick={this.closeModal}>
							Close
						</Button>
					</Modal.Footer>
				</Modal.Dialog>;
			</Modal>
		)
	}

}
export default myModal
