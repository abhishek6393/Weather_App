import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

 import "./search.css"
import { useState } from 'react';






export default function Search({update}){    


    let [city,setCity]=useState("")

    let[err,setErr]=useState(false)


    let url="https://api.openweathermap.org/data/2.5/weather"

    let key="e5aa22d62c06bbcf591615ab4d086afe"
 

    function Change(event){


        setCity(event.target.value)
    }



    let getweather=async ()=>{


        
       

        let data= await fetch(`${url}?q=${city}&appid=${key}&units=metric`)

        let res= await data.json();
        console.log(res);
 
   
 
        
        
        let result={
 
 
         city:city,
 
 
         temp:res.main.temp,
 
         humidity:res.main.
         humidity,
 
        temp_max:res.main.
        temp_max,
 
 
        temp_min:res.main.temp_min,
 
        weather:res.weather[0].description
        
     
        }
 
 
 
        console.log(result);
 
 
        return result;


       

      

        


      
       

     
    }


     async function submit(event){


    

        event.preventDefault();

        console.log(city);

        setCity("");

         let data= await getweather();

         update(data)
    


  
        
    }

    return(


        <div className='search'>

            <form  onSubmit={submit}>

          

            <br /><br />

            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={Change} />

            <br /><br />

            <Button variant="contained" type="submit">Search</Button>


            {err&& <p>No such place exist in Database !</p>}


            </form>
            
        </div>
    )




}