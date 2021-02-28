import React, { Component } from 'react';
import axios from 'axios';
import './card.css';

class card extends Component {

    state = {
        wapp: [
            { id: 1, Date: "", Temp_min: "", Temp_max: "", Weather: "",},
            { id: 2, Date: "", Temp_min: "", Temp_max: "", Weather: "",},
            { id: 3, Date: "", Temp_min: "", Temp_max: "", Weather: "",},
            { id: 4, Date: "", Temp_min: "", Temp_max: "", Weather: "",},
            { id: 5, Date: "", Temp_min: "", Temp_max: "", Weather: "",}
        ],
        Icity: "Delhi",
        city: "Gurgaon",
    }
 
   componentDidMount(){

     axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.state.Icity+'&units=metric&appid=07848ff82b55c308ed22ead57d582a47').then(response => {

       let api = response.data.list;
       var temp=[];  //temperature
       var desc=[]; //description
       var date=[]; //date
       var i=0; //loop

       for(i=0;i<api.length;i=i+8)
       {
          temp.push(api[i].main);
          desc.push(api[i].weather[0]);
          date.push(api[i].dt_txt);
       }
       
       for(i=0;i<5;i++)
       {    
       
            const statFound = this.state.wapp.find(wap => wap.id === i + 1);
            statFound.Temp_min = temp[i].temp_min;
            statFound.Temp_max = temp[i].temp_max;
            statFound.Weather = desc[i].description;
            statFound.Date = date[i];

            const duplicatestats = this.state.wapp.filter(wap=> wap.id !== i + 1);
                    this.setState({
                        wapp: [...duplicatestats, statFound]
                    })
       }

       console.log(api); //output for api
       console.log(this.state.wapp);
       console.log(this.state.Icity);
       })

}
//api function..................

componentDidUpdate(prevProps, prevState){
  if(prevState.city !== this.state.city){
    this.componentDidMount();
  }
}

onSearch = (event) => {
  event.preventDefault();
  this.setState({Icity : event.target.value});

}

//let query ="Delhi";
handleClick = (event) => {
  event.preventDefault();
  this.setState({city: this.state.Icity});
}


render() {

  return (

  <div className="container" >
    <div className="row" >
        <div className="col-sm-6 col-md-12" align="center">
          <p align="center">
            <font color="White" face="Comic sans ms">
            Search For City Bar
            <br />

    <form>
          <div className="form-group">
    <label>City : </label>
    <input type="text" className="form-control" placeholder="Enter the city here..." onChange={this.onSearch}/>
          </div>
    <button class="but" onClick = {this.handleClick}>Search</button>
    </form>
            </font>
          </p>
        </div>
    </div>
<div className="row">
  <div className="col-sm-4 col-md-4">
        <div className="card margin-card" >
            <div className="card-header text-center">
              DAY 1
              <hr />
              {this.state.wapp[0].Date}
              <hr/>
               Min Temp:{this.state.wapp[0].Temp_min}
              <hr/>
               Max Temp:{this.state.wapp[0].Temp_max}
              <hr/>
              {this.state.wapp[0].Weather}

            </div>
        </div>
    </div>
    <br/>
  <div className="col-sm-4 col-md-4">
        <div className="card margin-card" >
            <div className="card-header text-center">
              DAY 2
              <hr />
              {this.state.wapp[1].Date}
              <hr/>
               Min Temp:{this.state.wapp[1].Temp_min}
              <hr/>
               Max Temp:{this.state.wapp[1].Temp_max}
              <hr/>
              {this.state.wapp[1].Weather}

            </div>
        </div>
    </div>
    <br />
  <div className="col-sm-4 col-md-4">
        <div className="card margin-card" >
            <div className="card-header text-center">
              DAY 3
              <hr />
              {this.state.wapp[2].Date}
              <hr/>
               Min Temp:{this.state.wapp[2].Temp_min}
              <hr/>
               Max Temp:{this.state.wapp[2].Temp_max}
              <hr/>
              {this.state.wapp[2].Weather}

            </div>
        </div>
    </div>
    <br />
  <div className="col-sm-4 col-md-4">
    <br></br>
        <div className="card margin-card" >
            <div className="card-header text-center">

              DAY 4
              <hr />
              {this.state.wapp[3].Date}
              <hr/>
               Min Temp:{this.state.wapp[3].Temp_min}
              <hr/>
               Max Temp:{this.state.wapp[3].Temp_max}
              <hr/>
              {this.state.wapp[3].Weather}

            </div>
        </div>
    </div>
    <br />

  <div className="col-sm-4 col-md-4">
    <br></br>
        <div className="card margin-card" >
            <div className="card-header text-center">
              DAY 5
              <hr />
              {this.state.wapp[4].Date}
              <hr/>
               Min Temp:{this.state.wapp[4].Temp_min}
              <hr/>
               Max Temp:{this.state.wapp[4].Temp_max}
              <hr/>
              {this.state.wapp[4].Weather}

            </div>
        </div>
    </div>
    <br />
  </div>
</div>        

        );
    }
}

export default card;