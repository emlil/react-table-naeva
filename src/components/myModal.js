import React, {Component, useState} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";




class myModal extends React.Component{

	constructor(props){
		super(props);
	}

	closeModal(){
		if(!this.props.onClose) return;
		this.props.onClose();
	}

	render() {
		if(!this.props.show){
			return null;
		}
		let data = this.props.elem;

		return (
			<Modal id="theModal" show={true}
			onHide={()=>this.closeModal()} animation={true} size={"lg"}>

					<Modal.Header closeButton={ () => this.closeModal()}>
						<Modal.Title><h2>{data.Title}</h2></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<Row>
								<Col>
									<div>
										<li>Year: {data.Year}</li>
										<li>Rated: {data.Rated}</li>
										<li>Runtime: {data.Runtime} </li>
									</div>
								</Col>
								<Col>
									<Image rounded src={data.Poster}/>
								</Col>
							</Row>
						<div>
							<p><br/>{data.Plot}</p>
						</div>
						</Container>
					</Modal.Body>

			</Modal>
		)
	}
}
export default myModal
