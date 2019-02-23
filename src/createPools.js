import React, { Component } from 'react';
import { Input, Button, Select, Label } from 'semantic-ui-react'

class CreatePools extends Component {

  state = {
    teamName: "",
    value: 1,
    number: 3,
    options: [],
  }

  componentWillMount(){
    let optionss=[];
    for(let i=1;i<=parseInt(this.state.number);i++){
          optionss=[...optionss,{key: i, text: i, value: i}];
    }
    this.setState({
      options: optionss,
    })
  }

  handleOnChange = (e) => {
    this.setState({
      teamName: e.target.value,
    })
  }

  handleSelectChange = (event,data) => {
    this.setState({
      value: data.value,
    })
  }

  render() {


    return (
      <div className = {"formContainer"}>
      <Input type='text' placeholder='Podaj nazwę drużyny' onChange={this.handleOnChange} action />
      <div>
      <Label size={"big"}>Wybierz grupę</Label>
      <Select compact onChange={ this.handleSelectChange} options={this.state.options} value={this.state.value} />
      </div>
      <Button onClick={this.handleOnClick}>Dodaj drużynę</Button>
      </div>

    );
  }
}

export default CreatePools;
