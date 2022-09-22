import React, { Component }  from 'react';
import './App.css';

class InputNumber extends React.Component {
  state = {
    value: 0,
  }

  constructor() {
    super();
    
    this.refresh = this.refresh.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
  get value() {
    return this.state.value;
  }

  refresh() {
    this.setState({ value: this.value - 1 });
  }

  increment() {
    const { max } = this.props;
    
    if (typeof max === 'number' && this.value >= max) return;
    
    this.setState({ value: this.value + 1 });
  }

  decrement() {
    const { min } = this.props;
    
    if (typeof min === 'number' && this.value <= min) return;
    
    this.setState({ value: this.value - 1 });
  }
  
  render() {
    return (
      <div className="input_number" style={this.props.style}>
        <button type="button" onClick={this.decrement}>&minus;</button>
        <span>{this.value}</span>
        <button type="button" onClick={this.increment}>&#43;</button>     
      </div>
    )
  }
}



function popup() {
  let inputValue = 3;
  let updateInputValue = (v) => {
    inputValue += v;
  }

  return <div className='popup_bkg'>
    <div className='popup_box'>
        Escolha a data
        <input
            type="date"
            placeholder="MM/DD/AAAA">
        </input>
        <br/>
        Quantidade de sacos
        <InputNumber min={0} max={100}/>
        <br/>
        <button>Submeter</button>
    </div>
  </div>;
}


function header() {

  let inputValue;
  let clique = () => {
    window.alert("pesquisar<\"" + inputValue + "\">");
    popup();
  };

  let abrirPopup = () => {

  }
  
  let updateInputValue = (evt) => {
    const val = evt.target.value;
    inputValue = val;
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
              {popup()}



          </div>;
}

export default App;
