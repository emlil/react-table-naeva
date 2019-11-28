import React  from 'react';
import logo from './logo.svg';
import './App.css';
import MyTable from './components/myTable';


function App() {
  return (
    <div className="App">
      <MyTable search={"Rush+Hour"}/>
    </div>
  );
}

export default App;
