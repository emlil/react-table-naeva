import React  from 'react';
import './App.css';
import MyTable from './components/myTable';

function doSearch() {
    const val = document.getElementById("input").value;
}

function App() {


    return (
    <div className="App">
        <header>Test</header>
        <div>
            <input id={"input"}/>
            <button onClick ={doSearch} >Søk</button>
        </div>
        <div>
            <div id="leftPart"></div>
            <MyTable search={"Rush+Hour"}/>
            <div id ="rightPart"></div>
        </div>
    </div>
  );
}

export default App;
