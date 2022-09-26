import React, { Component }  from 'react';
import './App.css';
//import './Popup.js';

import PopUp from './PopUp.js'; 
require('./PopUp.js');



class Header extends React.Component{

  state = {
    value: '',
    hidden: true,
  }

  constructor() {
    super();
    
    this.fechar = this.fechar.bind(this);
    this.clique = this.clique.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  get value() {
    return this.state.value;
  }

  fechar(retorno) {
    this.setState({hidden: true});

    if(retorno.quantidade == 0)
      return;
    
    window.alert('data: '+retorno.data+'\nquantidade: '+retorno.quantidade);
  };

  clique () {
    this.setState({hidden: false});
    //window.alert("pesquisar<\"" + this.state.value + "\">");
  };

  updateInputValue (evt) {
    const val = evt.target.value;
    this.setState({value: val});
  }

  render() {
  return (
    <div className="header">
        reciclarte

        <div className='search_bar'>
            <input
                type="text"
                className='text_input'
                placeholder="Pesquisar"
                value={this.state.value}
                onChange={evt => this.updateInputValue(evt)}
              />
            
            <button className='search_buttom' onClick={this.clique}/>


            {this.state.hidden?'':<PopUp fechar={this.fechar}></PopUp>}
            
        </div>
        
    </div>
  );
  }
}

//{this.state.hidden?'':<PopUp fechar={this.fechar}></PopUp>}


function App() {
  return  <div>

              <Header/>

          </div>;
}

export default App;
