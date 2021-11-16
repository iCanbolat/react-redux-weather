import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from '@mui/material/Container';
import Home from './pages/Home';
import About from './pages/About';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App"> 
    <Container fixed>
    
    <Router>
    
      <Grid pt={5} item md={12} xs={12} className="nav">
        <Button  variant="contained"><Link className="link" to="/">Home</Link>   </Button>
        <Button  variant="contained"><Link className="link" to="/about">About</Link>   </Button>
      </Grid>   
  





      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
      
  </Router>


    
   </Container>
   </div>
  );
}



 

export default App;
