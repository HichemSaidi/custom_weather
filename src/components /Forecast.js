import React, { Component } from 'react'
import styled from 'styled-components';
import './Forecast.css';


function Forecast(props){
   
    
        return (     
            <div className='col text-center bubble'>
                <div className='blup'>
                <img src={`http://openweathermap.org/img/wn/${props.gly}@2x.png`}></img><br></br>
                 <p>{props.dsc}</p>
                 </div>
            </div>
        )
 
}

export default Forecast
