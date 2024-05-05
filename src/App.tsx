import React from 'react';
import './App.css';
import { Button, Grid} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import MainGrid from './components/MainGrid';
import PuzzleGrid from './components/PuzzleGrid';
import axios from 'axios';

const useStyles = makeStyles({
  root:{
    display:"flex",
    flexFlow:"row",
    width:"100%",
    marginTop:"10px"
  }
});

const  App = ()=> {
  const classes = useStyles();
  const [currentImage, setCurrentImage]= React.useState<any>('');

  const generateImage = async ()=>{
    const options ={
      method: 'GET',
      url:"http://localhost:5000"
    }
    const data = await axios.request(options).then((response)=>{
      return response.data
    }).catch((error)=>{
      console.error(error)
      return ''
    })
    setCurrentImage(data.urls.raw)
  }

  return (
    <div className="App">
      <Grid lg={12} className={classes.root}>  
        <Button onClick={generateImage}>Click Me</Button>
        <Grid lg={6} className={classes.root}>
          <MainGrid currentImage={currentImage}/>
        </Grid>
        <Grid lg={6} className={classes.root}>
          <PuzzleGrid currentImage={currentImage}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
