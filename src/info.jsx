
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}){

    let ini="https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";


    let hot="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=2048x2048&w=is&k=20&c=imXaczN9FcMjasjmjuZGOZraYMBSUy6ga4hoP084lBg=";

    let cold="https://media.istockphoto.com/id/1336157078/photo/beautiful-winter-background-of-snow-and-blurred-forest-in-background.jpg?s=2048x2048&w=is&k=20&c=tGF6yGVXbCNIisAgNGl0sJwTSSHUZBLwM2dlN8psIoE=";

    let rainy="https://media.istockphoto.com/id/1367804543/photo/cloudy-sky-flashes-and-rain-cloudy-sky-flashes-and-rain.jpg?s=612x612&w=0&k=20&c=hGwdk6b2qe0sH-d7maOCJ-jx5S3ChYWuXkI2mGMYnnI="




    return(

        <div>



<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainy:(info.temp>15?hot:cold)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}

          {info.humidity>80?<UmbrellaIcon/>:(info.temp>15?< WbSunnyIcon/>:<AcUnitIcon />)}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>Temprature:{info.temp}&deg;c</div>

        <p>Humidity:{info.humidity}</p>

        <p>MIN_Temprature:{info.temp_min}</p>

        <p>Max_Temprature:{info.temp_max}</p>

        <p>The Weather can describe as <i> {info.weather} </i> And feels Like {info.temp}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>

        </div>
    )
}