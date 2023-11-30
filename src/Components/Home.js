import React from "react";
import Image from './Weather.jpg'
import { Typography } from "@mui/material";
import ReactPlayer from 'react-player'
const Home=()=>{
    return (
        <div>
            <Typography>
                <h1>
                    About WeatherApp
                </h1>
                Weather is the state of the atmosphere,
                describing for example the degree to which 
                it is hot or cold, wet or dry, calm or stormy, 
                clear or cloudy. On Earth, most weather phenomena
                occur in the lowest layer of the planet's atmosphere, 
                the troposphere, just below the stratosphere.


                The day-to-day conditions of the atmosphere at a place with respect to elements
                 like humidity, temperature, wind speed, rainfall, etc. is called the weather of 
                 that place. Weather can be cloudy, sunny, rainy, stormy or clear.
            </Typography>
            <img src={Image} alt="Weather.jpg" style={{height:"300px",width:"600px"}} />
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'margin', alignItems: 'margin', flexDirection: 'column' }}></div>
            <Typography>
                <h3>
                    Extreme Geographical Weather Clips
                </h3>
            Weather has always been one of the most dynamic and complex forces shaping our planet, but now it's intensifying in varied and complex ways. The feature film 'Extreme Weather' takes us to the frontlines where few have gone
Among the melting tidewater glaciers of Alaska, National Geographic Emerging Explorer Dr. Erin Pettit leads a young team of researchers into the splash zone at the face of Dawes Glacier aboard a boat custom-designed to get as close as possible to the calving ice. Using a variety of instruments, her team works to measure the rate of melting to help build a more accurate model of global ocean level rise.
In the Great Plains of the United States, Oklahoma native Justin Walker tries to place pods of sensors inside tornados as part of an effort to determine if tornado outbreaks are growing more extreme. Working with driver Herb Stein, he races across the farm roads of the Heartland to get his instruments in direct contact with one of the most destructive forces on the planet.
A prolonged draught in California has caused the death of huge swaths of forest, creating a dangerous surge in the intensity of wildfires. Firefighters battle through smoke so thick it looks like night and so shockingly close to the heat that out-of-control flames lick at the lens. These growing infernos are themselves speeding the rate of polar ice melt, influenced by and also an influence on our increasingly extreme weather.
            </Typography>
            <ReactPlayer url={'https://youtu.be/yrOYxLt9SCI'} height={300}  width={600}controls />
       </div>
    )  
}
export default Home