import React, {Component} from "react";

const apiUrl= "http://www.omdbapi.com/?apikey=4486ae48&s=";


class utils	extends Component{

	static async getMovieList(search) {
		// If it errors, handle it properly!
		let data = await utils.getDataFromApi(search);
		if(data === undefined)
			return undefined;
		console.log("data", data);
		return {
			list: this.objToArray(data),
			vals: Object.keys(data[0])
		};
	}

	static objToArray(arr) {
		return arr.map(x=>Object.values(x))
	}

	static async getDataFromApi(name) {
		let response = await fetch(apiUrl + name);
		let json = await response.json();
		return json.Search;
	}

}

export default utils;
