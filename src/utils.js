import React,{Component} from "react";

const apiUrl= "http://www.omdbapi.com/?apikey=4486ae48&s=";


class utils	extends Component{

	constructor(props){
		super(props);

	}


static async getDataFromApi(name) {
	var data = await fetch(apiUrl+name)
		.then(response => response.json())
		.then(response =>response.Search);
	return data;
}

}

export default utils;
