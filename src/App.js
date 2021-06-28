import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Bitlink from "./components/Bitlink";
import AlertMUITemplate from "react-alert-template-mui";
import { positions, Provider } from "react-alert";
import { Paper } from "@material-ui/core";
import useStyles from "./style/useStyles";

const App = () => {
  const [bitlink, setBitlink] = useState("");
  const classes = useStyles();

  const options = {
    position: positions.MIDDLE,
  };

  useEffect(() => {
    console.log(bitlink);
  });

  return (
    <div className={classes.root}>
      <Provider template={AlertMUITemplate} {...options}>
        <h1 className={classes.title}>ShottoLink</h1>
        <Paper className={classes.paper} elevation={3}>
          <Form bitLink={bitlink} setBitlink={setBitlink} />
          <Bitlink bitlink={bitlink} />
        </Paper>
      </Provider>
    </div>
  );
};

export default App;
