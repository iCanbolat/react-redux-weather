import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '../../App.css';

function About() {
    return (<Grid  container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '70vh' }} md={12} xs={12}
    >
        
        <Grid item sx={{width:"70%"}} >
        <Card sx={{ width:"auto", minHeight:200 ,p:4, borderRadius: '7%'}}>
            <CardContent>
               
                        <Typography className="label" variant="h5" sx={{pb:4}} component="div">
                        React Weather App by Canbolat
                        </Typography>
               
               
                <Grid container spacing={2}>
                    <Grid item className="label" sx={{ flexDirection: 'column', display: 'flex', }} md={12} sm={12}>
                    
                            <Typography className="label" variant="h5" sx={{pt:3}} component="div">
                                Check current and 2 days forecast
                            </Typography>
                      
                    </Grid>
                   
                    </Grid>
                
            </CardContent>
            
            </Card>
            </Grid>
    </Grid>
    )}

  export default About;