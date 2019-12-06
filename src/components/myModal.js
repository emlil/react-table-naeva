import React, {Component} from "react"
import Modal from 'react-bootstrap/Modal'



class myModal extends React.Component{
	constructor(){
		super();
	}
	render() {
		if(!this.props.show){
			return null;
		}
		let data = this.props.elem;
		return (
			<Modal show={true}>
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

				</Modal.Dialog>;
			</Modal>
		)
	}

}
export default myModal
