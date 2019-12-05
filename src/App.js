import React  from 'react';
import './App.css';
import MyTable from './components/myTable';
import utils from "./utils"

class App extends React.Component {

    state = {
        list: []
    };
     sortByCol(index){
         let copy = [...this.state.list.list];
         if(this.state.list.sortBy===index){
             console.log("reverse"+index+this.state.list.sortBy);
             this.setState({
                 list:{
                     list:copy.reverse(),
                     vals: this.state.list.vals,
                     sortBy: index
                 }
             })

         }

        else {
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
        let list = await utils.getMovieList("Rush+Hour");
        this.setState({list});
    }
    async search(){
        this.setState({list: {}});
        var x = document.getElementById("input").value;
        let list = await utils.getMovieList(x.replace(" ","+"));
        console.log("søk",list);
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
                    <MyTable elem={this.state.list} onSort={this.sortByCol.bind(this)}/>
                    <div id ="rightPart"></div>
                </div>
            </div>
        );
    }
}

export default App;
