import React, { Component } from 'react';
import { Grid, Segment, List, Header, Button, Divider} from 'semantic-ui-react'

class App extends Component {

  state = {
    draw1: ['Soccer Punch', 'Orły Wrocław', 'Alkopoligamia','Przyjaciele z Boiska', 'Fc Śródmieście Team'],
    draw2: ['Spartan Błonie', 'Sancho Panza', 'FC Turbojulita','Kłosdipns', 'Red Devils Wrocław'],
    draw3: ['LGW Stare Miasto', 'Fuga Team', 'Radosny Rabarbar','Tiki-Laga', 'STL&LS'],
    draw4: ['Reqiro CF', 'księżniczki szczepin', 'PD WildBoars','Wataha Alfa', 'Wrocław Roosters','Kozanów Team'],
    poolA: [],
    poolB: [],
    poolC: [],
    poolD: [],
    group: [1,2,3,4],
  }

  randomGroup = () => {
    let groupName=0;
    if(this.state.group.length===1){
      this.setState({
        group: [1,2,3,4],
      })
    } else {
      groupName = Math.floor(Math.random() * this.state.group.length);
      this.setState({
        group: this.state.group.filter((groupNumber,index) => index !== groupName),
      })
    }

    return this.state.group[groupName];
  }

  handleClick = () => {

    const group = this.randomGroup();

    if(this.state.draw1.length!==0){
      const team = this.state.draw1[Math.floor(Math.random()*this.state.draw1.length)];
      if(group===1){
        this.setState({
          poolA: [...this.state.poolA,team],
          draw1: this.state.draw1.filter(teamName => teamName !== team),
        })
      } else if (group===2){
        this.setState({
          poolB: [...this.state.poolB,team],
          draw1: this.state.draw1.filter(teamName => teamName !== team),
        })
      } else if (group===3){
        this.setState({
          poolC: [...this.state.poolC,team],
          draw1: this.state.draw1.filter(teamName => teamName !== team),
        })
      } else if (group===4){
        this.setState({
          poolD: [...this.state.poolD,team],
          draw1: this.state.draw1.filter(teamName => teamName !== team),
        })
      }
    } else if(this.state.draw2.length!==0){
      const team = this.state.draw2[Math.floor(Math.random()*this.state.draw2.length)];
      if(group===1){
        this.setState({
          poolA: [...this.state.poolA,team],
          draw2: this.state.draw2.filter(teamName => teamName !== team),
        })
      } else if (group===2){
        this.setState({
          poolB: [...this.state.poolB,team],
          draw2: this.state.draw2.filter(teamName => teamName !== team),
        })
      } else if (group===3){
        this.setState({
          poolC: [...this.state.poolC,team],
          draw2: this.state.draw2.filter(teamName => teamName !== team),
        })
      } else if (group===4){
        this.setState({
          poolD: [...this.state.poolD,team],
          draw2: this.state.draw2.filter(teamName => teamName !== team),
        })
      }
    } else if(this.state.draw3.length!==0){
      const team = this.state.draw3[Math.floor(Math.random()*this.state.draw3.length)];
      if(group===1){
        this.setState({
          poolA: [...this.state.poolA,team],
          draw3: this.state.draw3.filter(teamName => teamName !== team),
        })
      } else if (group===2){
        this.setState({
          poolB: [...this.state.poolB,team],
          draw3: this.state.draw3.filter(teamName => teamName !== team),
        })
      } else if (group===3){
        this.setState({
          poolC: [...this.state.poolC,team],
          draw3: this.state.draw3.filter(teamName => teamName !== team),
        })
      } else if (group===4){
        this.setState({
          poolD: [...this.state.poolD,team],
          draw3: this.state.draw3.filter(teamName => teamName !== team),
        })
      }
    } else if(this.state.draw4.length!==0){
      const team = this.state.draw4[Math.floor(Math.random()*this.state.draw4.length)];
      if(group===1){
        this.setState({
          poolA: [...this.state.poolA,team],
          draw4: this.state.draw4.filter(teamName => teamName !== team),
        })
      } else if (group===2){
        this.setState({
          poolB: [...this.state.poolB,team],
          draw4: this.state.draw4.filter(teamName => teamName !== team),
        })
      } else if (group===3){
        this.setState({
          poolC: [...this.state.poolC,team],
          draw4: this.state.draw4.filter(teamName => teamName !== team),
        })
      } else if (group===4){
        this.setState({
          poolD: [...this.state.poolD,team],
          draw4: this.state.draw4.filter(teamName => teamName !== team),
        })
      }
    }

  }



  render() {

    const drawList1 = this.state.draw1.map((el,ind)=>{
      return <List.Item key={ind}>{el}</List.Item>
    });
    const drawList2 = this.state.draw2.map((el,ind)=>{
      return <List.Item key={ind}>{el}</List.Item>
    });
    const drawList3 = this.state.draw3.map((el,ind)=>{
      return <List.Item key={ind}>{el}</List.Item>
    });
    const drawList4 = this.state.draw4.map((el,ind)=>{
      return <List.Item key={ind}>{el}</List.Item>
    });


    const pool1 = this.state.poolA.map((el,ind)=>{
      return <List.Item key={ind}>{el}</List.Item>
    });
    const pool2 = this.state.poolB.map((el,ind)=>{
      return <List.Item key={ind}>{el}</List.Item>
    });
    const pool3 = this.state.poolC.map((el,ind)=>{
      return <List.Item key={ind}>{el}</List.Item>
    });
    const pool4 = this.state.poolD.map((el,ind)=>{
      return <List.Item key={ind}>{el}</List.Item>
    });








    return (
      <div>
      <Grid columns='equal'>
      <Grid.Row>

      <Grid.Column>
        <Segment>
          <Header as='h1'>Koszyk 1</Header>
          <List ordered>
            {drawList1}
          </List>
        </Segment>
      </Grid.Column>


      <Grid.Column>
        <Segment>
        <Header as='h1'>Koszyk 2</Header>
        <List ordered>
          {drawList2}
        </List>
        </Segment>
      </Grid.Column>


      <Grid.Column>
        <Segment>
        <Header as='h1'>Koszyk 3</Header>
        <List ordered>
          {drawList3}
        </List>
        </Segment>
      </Grid.Column>


      <Grid.Column>
        <Segment>
        <Header as='h1'>Koszyk 4</Header>
        <List ordered>
          {drawList4}
        </List>
        </Segment>
      </Grid.Column>


      </Grid.Row>
      </Grid>


      <Grid columns='equal'>
      <Grid.Row>


      <Grid.Column>
        <Segment>
          <Header as='h1'>Grupa A</Header>
          <List ordered>
          {pool1}
          </List>
        </Segment>

      </Grid.Column>
      <Grid.Column>
        <Segment>
        <Header as='h1'>Grupa B</Header>
        <List ordered>
          {pool2}
        </List>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
        <Header as='h1'>Grupa C</Header>
        <List ordered>
        {pool3}
        </List>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
        <Header as='h1'>Grupa D</Header>
        <List ordered>
        {pool4}
        </List>
        </Segment>
      </Grid.Column>
      </Grid.Row>
      </Grid>

      <Divider />


        <Grid>
          <Grid.Column textAlign="center">
            <Button onClick={this.handleClick}>Losuj</Button>
          </Grid.Column>
        </Grid>



      </div>

    );
  }
}

export default App;
