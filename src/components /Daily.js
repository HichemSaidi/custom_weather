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
                            <div className="row dailybox nopadding mt-5" >
                                        <div className=" text-center col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <Custom  width="150"src="../../images/cadre.png" alt="Current" className="image mt-4 "></Custom>
                                    </div>

                                    <div className=" nopadding col-xl-7  col-lg-7 col-md-6 col-sm-8 col-12">
                                            <div className="row " >
                                                        <div className="col"> <h1> {props.city} {props.temp}°C  <img src={props.icon}></img> </h1> </div>
                                                        
                                                    </div>
                                                <span>Monday, 30/12/19, 17:12 Weather: {props.main}, Precipitation: {props.description}</span> 
                                            </div>      

                                    <div className=" mt-4  col-xl-2 col-lg-2 col-md-3   ">
                                            <button  type="button" className="btn-custom ">  Add to Favorite  </button>
                                            </div>
                                        
                            </div> 
                   
                );
            }

export default Daily
