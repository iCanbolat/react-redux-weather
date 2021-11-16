import { useState , useEffect} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { minHeight } from "@mui/system";
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import TextField from '@mui/material/TextField';
import '../../App.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {fetchDefault} from "../../redux/weatherSlice";
import { DeleteOutlineOutlined } from "@mui/icons-material";


function Home() {

    const dispatch = useDispatch();
    const [selectedCity, setSelectedCity] = useState('Istanbul');
    const getCity  = useSelector((state) => state.weather.item);
    const myDate  = useSelector((state) => state.weather.days);

    useEffect(() => {
        dispatch(fetchDefault(selectedCity))   
    }, [dispatch])

    const handleChange = (e) => {
        if(e.key ==="Enter")    {
         dispatch(fetchDefault(selectedCity));
        }
    };
 
    return (
        <Grid  container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '70vh' }} md={12} xs={12}
        >
 
            <Grid item sx={{width:"100%"}} >
            <Card sx={{ width:"auto", minHeight:400 ,p:4, borderRadius: '7%'}}>
                <CardContent>


                <TextField sx={{mb:3}} id="demo-helper-text-misaligned-no-helper" label="Type Your City!" 
                onKeyPress={handleChange}
                onChange={(event) => {setSelectedCity(event.target.value)}} />

                    {getCity.current  && (
                            <Typography className="label" variant="h5" sx={{pb:5}} component="div">
                                {getCity.location.name}
                            </Typography>
                    )}
                   
                    <Grid container spacing={2}>
                        <Grid item className="label" sx={{ flexDirection: 'column', display: 'flex', }} md={4} sm={4}>
                        <div ><img src={`${getCity.current?.condition?.icon}`} alt="" /> </div>
                            {getCity.current && (
                                <Typography className="label" variant="h5" sx={{pb:5}} component="div">
                                    {getCity.current.condition.text}
                                </Typography>
                              )}
                        </Grid>
                        <Grid item md={4} sm={4}>
                        {getCity.current && (
                            <Typography variant="h4"  component="div">

                             {getCity.current.temp_c}°
                            </Typography>
                    )}
                        
                        </Grid>
                        <Grid item md={4} sm={4}>
                        {getCity.current && (
                            <Typography variant="h6"  component="div">
                             <div>Wind : {getCity.current.gust_kph} kph</div>
                             <div>Pressure: {getCity.current.pressure_in} in</div>
                            </Typography>
                    )}
                         </Grid>
                        </Grid>
                    
                </CardContent>
                {getCity.forecast ? (
                <Grid container justifyContent="center" spacing={2} sx={{pt:5}} columns={15}>
                    
                            <Grid item xs={3} sx={{mb:3}}>
                            <div  className="label">{ myDate?.[1] }</div>
                            <div className="label"> <img src={`${getCity.forecast?.forecastday?.[1]?.day?.condition?.icon}`} alt="" /> </div> 
                            <div className="label" >{getCity.forecast?.forecastday?.[1]?.day?.avgtemp_c}°</div> 
                        </Grid>
                        
                        
                            <Grid item xs={3} sx={{mb:3}}>
                            <div  className="label">{ myDate?.[2] }</div>
                            <div className="label"> <img src={`${getCity.forecast?.forecastday?.[2]?.day?.condition?.icon}`} alt="" /> </div> 
                            <div className="label" >{getCity.forecast?.forecastday?.[2]?.day?.avgtemp_c}°</div> 
                        </Grid>
                       
                
                  

                    </Grid>): (<div>Loading..</div>)}
                </Card>
                </Grid>
        </Grid>
    );
  }


export default Home;