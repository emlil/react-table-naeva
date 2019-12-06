import React, {Component, useState} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";




class myModal extends React.Component{

	constructor(props){
		super(props);
	}

	closeModal(){
		if(!this.props.onClose) return;
		this.props.onClose();
		//this.props.show=false;
	}

	render() {
		if(!this.props.show){
			return null;
		}
		let data = this.props.elem;

		return (
			<Modal id="theModal" show={true}
			onHide={()=>this.closeModal()}>
				<Modal.Dialog>
					<Modal.Header closeButton={ () => this.closeModal()}>
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

						<Button variant="primary" data-dismiss="modal" onClick={() => this.closeModal()}>
							Close
						</Button>
					</Modal.Footer>
				</Modal.Dialog>;
			</Modal>
		)
	}
}
export default myModal
