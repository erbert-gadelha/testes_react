import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';

/*function clique (a) {
  window.alert("clicou" + a);
}*/




function header() {

  let inputValue;
  let clique = () => {  window.alert("pesquisar<\"" + inputValue + "\">"); };

  let updateInputValue = (evt) => {
    const val = evt.target.value;
    inputValue = val;
    // ...       
    //this.setState({
    //  inputValue: val
    //});
  }




  return (
    <div className="header">
        reciclarte

        <div className='search_bar'>
            <input
                type="text"
                className='text_input'
                placeholder="Pesquisar"
                value={inputValue}
                onChange={evt => updateInputValue(evt)}>

            </input>
            <button className='search_buttom' onClick={clique}>
              
            </button>
        </div>
        
    </div>
  );
}


function App() {
  return  <div>

              {header()}



          </div>;
}

export default App;
