import Search from './search_box'
import InfoBox from './info'
import { colors } from '@mui/material'
import { useState } from 'react'



export default function Apps(){


    let sty={

        color:"red"
    }


    let [Weather,setWeather]=useState(     {   
        
        city:"New_Delhi",

        humidity: 74,
        
        temp: 31.05,
        temp_max: 31.05,
        temp_min: 31.05,
        weather: "haze"

    }



  


    )


    function Update(newinfo){


        setWeather(newinfo);

     

    }


    return(

        <div>


            <h1 style={sty}>WEATHER APP ! </h1>


            <Search  update={Update}/>

            <br /><br /> 

            <InfoBox  info={Weather}/>
        </div>
    )
}