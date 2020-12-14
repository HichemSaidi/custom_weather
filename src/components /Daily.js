import React, { Component } from 'react'
import styled from 'styled-components';
import './Daily.css';



function Daily(props){
  
    const Custom = styled.img`
    border: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props.photo});

    `;
   

        return (
                    <div className=" mt-5 text-center Daily" >       
                            <div className="row">
                                        <div className="col-sm-3  padding-0">
                                        <Custom  width="150"src="../../images/cadre.png" alt="Current" className=" ville mt-4 "></Custom>
                                    </div>

                                    <div className="col-sm-7 mt-4 text-left">
                                            <div className="row " >
                                                        <div className="col"> <h1 class="heading"> {props.city} {props.temp}°C <img src={props.icon}></img> </h1> </div>
                                                        
                                                    </div>
                                                <span>Monday, 30/12/19, 17:12 Weather: {props.main}, Precipitation: {props.description}</span> 
                                            </div>      

                                    <div className="col-sm-2 mt-4 " >
                                            <button  type="button" className="btn-custom"> Add to Favorite </button>
                                            </div>
                                        
                            </div> 
                    </div>
                );
            }

export default Daily
