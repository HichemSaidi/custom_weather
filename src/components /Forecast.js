import React, { Component } from 'react'
import styled from 'styled-components';
import './Forecast.css';


function Forecast(props){
   
    
        return (     
            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-8 text-center bubble mt-3'>
                <div className='square'>
                <img src={`http://openweathermap.org/img/wn/${props.gly}@2x.png`}></img><br></br>
                 <p>{props.dsc}</p>
                 </div>
                 
            </div>
        )
 
}

export default Forecast
