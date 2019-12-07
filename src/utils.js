import React, {Component} from "react";

const apiUrl = "http://www.omdbapi.com/?apikey=4486ae48&";


class utils extends Component {

	static async getDistinctmovie(key){
		let src=apiUrl+"i="+key+"&plot=full";
		let data = await fetch(src);
		let json = await data.json();

		return json;
	}

	static async getMovieList(search) {
		// If it errors, handle it properly!
		let data = await utils.getDataFromApi(search);
		if (data === undefined)
			return undefined;
		return {
			list: this.objToArray(data),
			vals: Object.keys(data[0])
		};
	}

	static objToArray(arr) {
		return arr.map(x => Object.values(x))
	}

	static async getDataFromApi(name) {
		let response = await fetch(apiUrl+"s="+ name);
		let json = await response.json();
		return json.Search;
	}


}


export default utils;
