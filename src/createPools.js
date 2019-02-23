import React, { Component } from 'react';
import { Input, Button, Select } from 'semantic-ui-react'

class CreatePools extends Component {

  state = {
    teamName: "",
    number: 3,
  }

  handleOnChange = (e) => {
    this.setState({
      teamName: e.target.value,
    })
  }

  render() {
    let options=[];
    //zmienic potem state
    for(let i=1;i<parseInt(this.state.number);i++){
      console.log("Witam",i)
          options=[...options,{key: i, text: i, value: i}];
    }

    return (
      <div className = {"formContainer"}>
      <Input type='text' placeholder='Podaj nazwę drużyny' onChange={this.handleOnChange} action>
      <input />
        <Select compact options={options} defaultValue='articles' />
        <Button type='submit'>Search</Button>
      </Input>
      </div>

    );
  }
}

export default CreatePools;
