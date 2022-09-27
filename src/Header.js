import React, { Component }  from 'react';
import './App.css';

import PopUp from './PopUp.js'; 
export default class Header extends React.Component {

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

      var header_bar = {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "flex-direction": "column",
        "text-align": "center",
        "font-size": "30px",
      
        "background-color": "rgb(61, 184, 93)",
        padding: "0 0 15px",
        color: "white",
        width: "100%"
      };

      var header_input = {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "flex-direction": "row",
        "text-align": "center",
        "border-radius": "8px",
        "background-color": "white",
        padding: "2px 5px 2px",
      };

      var inpt = {
        width: "100%",
        "background-color": "transparent",
        border: "none",
        outline: "none",
        padding: "5px 5px 5px",
        "font-size": "17px",
        color: "black"
      };

      var header_btn = {
        height: "20px",
        width: "20px"
      };


    return (
      <div style={header_bar}>
          reciclarte
  
          <div style={header_input}>
              <input style={inpt}
                  type="text"
                  className='text_input'
                  placeholder="Pesquisar"
                  value={this.state.value}
                  onChange={evt => this.updateInputValue(evt)}
                />
              
              <button style={header_btn} onClick={this.clique}/>
  
  
              {this.state.hidden?'':<PopUp fechar={this.fechar}></PopUp>}
              
          </div>
          
      </div>
    );
    }
  }