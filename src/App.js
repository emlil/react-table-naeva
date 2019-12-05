import React  from 'react';
import './App.css';
import MyTable from './components/myTable';
import utils from "./utils"

class App extends React.Component {

    state = {
        list: {}
    };

    async componentDidMount() {
        let list = await utils.getMovieList("Rush+Hour");
        this.setState({list});
    }
    async search(){
        this.setState({list: {}})
        var x = document.getElementById("input").value;
        let list = await utils.getMovieList(x.replace(" ","+"));
        this.setState({list});
    }
    render() {
        console.log(this.state.list);
        return (
            <div className="App">
                <header>Test</header>
                <div>
                    <input id={"input"}/>
                    <button onClick={() => this.search()} >Søk</button>
                </div>
                <div>
                    <div id="leftPart"></div>
                    <MyTable elem={this.state.list}/>
                    <div id ="rightPart"></div>
                </div>
            </div>
        );
    }
}

export default App;
