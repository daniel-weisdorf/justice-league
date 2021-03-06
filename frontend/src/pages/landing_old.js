import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import ButtonGreen from "../components/ButtonGreen.js";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import IndigoWave from "../../assets/IndigoWave.png";
import BackgroundImage from "../BackgroundImage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
  },
  container: {
    maxWidth: '500px',
    maxHeight: '500px'
  },
  overall: {
    justifyContent: 'center', 
    display: "flex", 
    height: "1000px", 
    backgroundImage: `url(${BackgroundImage})`,
    maxWidth: '500px',
    justify:"center"

  },
  title: {
    color: "#FFFFFF",
    fontSize: "30px"
  },
  individualButton: {
    backgroundColor: "#FFFFFF", 
    color: "#00000", 
    borderRadius:15, 
    padding: 20,
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    width:"150px",
    height: "150px",
    textTransform: "inherit"
  },
  orgButton: {
    backgroundColor: "#FFFFFF", 
    color: "#00000", 
    borderRadius:15, 
    padding:20, 
    margin:0, 
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    width:"150px",
    height: "150px",
    textTransform: "inherit"
  },
  buttonSpacing: {
    paddingTop: "300px"
  },
  continueButtonSpacing: {
    paddingTop: "150px",
    justifyContent: "center",
    paddingBottom: "600px",
  }
}));

export default function LandingPage() {   
  const classes = useStyles();

  return (
    <div justify="center" className={classes.overall}>
      <Grid container justify="center">
        <Grid container justify="center">
          <Typography className={classes.title}>
            COVID Passport
          </Typography>
        </Grid>

        <Grid container justify="center">
            <Grid item xs={6} className={classes.buttonSpacing}>
              <Button className={classes.individualButton}>I'm an<br />Individual</Button>
            </Grid>
            <Grid item xs={6} className={classes.buttonSpacing}>
              <Button className={classes.orgButton} >I'm an<br />Organization</Button>
            </Grid>
          </Grid>

        

          
          <Grid container justify="center" className={classes.continueButtonSpacing}>
            <ButtonGreen>Continue</ButtonGreen>
          </Grid>
    </Grid>

    </div>


  );
}