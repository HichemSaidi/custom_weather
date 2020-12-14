import React, { Component } from 'react'
import './App.css';
import Daily from './components /Daily'
import axios from 'axios';
import Forecast from './components /Forecast';
import { CSSTransition } from 'react-transition-group';

//url for first request
const beg = "http://api.openweathermap.org/data/2.5/weather?q="
const ApiKey ="&appid=54752bb9c521aa014a27aba32068b400"
//url for images 
const imageapi = "https://pixabay.com/api/?key=19488561-1edc149324b64b7882456c791&q=" 
const endimageapi = "&image_type=photo "

//icon url
const iconlink = "http://openweathermap.org/img/wn/"
const iconsize ="@2x.png"
//forecast

export class App extends Component {
state = {
  weather: [],
  lat:'',
  lon:'',
  city:'',
  temp:'',
  date:'',
  main:'',
  description:'',
  photo:'',
  icon:'',
  isSubmitted:false,
  Forecast:[]
}

handleChange = event => {
  this.setState({ city : (event.target.value).toUpperCase()}, () => {
      console.log(this.state.city)
  })

}

handleSubmit = () => {
  const link = beg.concat(this.state.city,ApiKey);
  console.log(link)
  axios.get(link)
      .then(res => {
        const temp = Math.round((res.data.main.temp)- 273.15);
        const main = res.data.weather[0].main
        const iconraw = res.data.weather[0].icon
        const icon = iconlink.concat(iconraw,iconsize)
        console.log(icon)
        const lon = res.data.coord.lon
        const lat = res.data.coord.lat
        this.setState({ main});
        const description = res.data.weather[0].description
        this.setState({ temp, description, main, icon, lon, lat});
        console.log(this.state)
          
    const req = "https://api.openweathermap.org/data/2.5/onecall?"
    const lien = req.concat("lat=",lat,'&',"lon=",lon,"&exclude=hourly,minutely",ApiKey)
            axios.get(lien)
            .then(res=> {
              const array = res.data.daily
              const Forecast = array.slice(0,5)
              this.setState({Forecast})
        
            })


          })

    }
  getPhoto = () => {
    const link = imageapi.concat(this.state.city,ApiKey);
    axios.get(link)
      .then(res => {
        const photodata = res.data.hits[0].largeImageURL;
        this.setState({ photo : photodata});

      })
  }

  onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      this.handleSubmit();
      this.getPhoto();
      this.setState({isSubmitted: true})

    }
    
  }

render() {
  const temp = {...this.state.temp}
  let isSubmitted = this.state.isSubmitted
  const Forecastdays = Object
      .keys(this.state.Forecast)
      .map(key => 
        <Forecast key={key}
        temp={this.state.Forecast[key].temp.day}
        gly={this.state.Forecast[key].weather[0].icon}
        dsc={this.state.Forecast[key].weather[0].main}
        />)

  return (
    
    <div className="container bg-custom2 mt-5 ">
          <div className=""> <p className="heading">Weather Forecast For You</p>
                    <p className="mt-3">Trandings:<a href="https://example.com"> New york, London, Tel Aviv, Amsterdam, Tokyo, Madrid</a></p>
                    <input className="form-control mt-5" type="text" onChange={this.handleChange} onKeyDown={this.onEnterPress} placeholder="Search city" />
          </div>
    <CSSTransition timeout={1000} classNames="fade" in={this.state.isSubmitted}>
    {isSubmitted ?  
              <Daily  
                    description={this.state.description}
                    city={this.state.city} 
                    temp={this.state.temp}
                    main={this.state.main}
                    photo={this.state.photo}
                    icon={this.state.icon}
              ></Daily>
 
                                                         : <h1></h1>}
        
    </CSSTransition>
    
    <CSSTransition timeout={4000} classNames="fade" in={this.state.isSubmitted}>
              <div class="container mt-5">
             {isSubmitted ?  <h1>Weekly Forecast</h1> : ""}   
               
                   
                      <div class="row mt-5">
                        {Forecastdays}
                        </div>
                    </div>
      </CSSTransition>
   
   </div>  
   );
  }
}
export default App;
