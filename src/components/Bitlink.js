import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useAlert } from "react-alert";
import useStyles from "../style/useStyles";

const Bitlink = ({ bitlink }) => {
  const alert = useAlert();
  const classes = useStyles();

  const handleCopy = () => {
    navigator.clipboard.writeText(bitlink);
    alert.show("Link Copied!");
  };

  const visitLink = () => {
    window.open(bitlink);
  };

  if (!bitlink) {
    return null;
  }

  return (
    <div>
      <h5 className={classes.congrats}>
        Congratulations! Your link has been shortened
      </h5>
      <TextField
        id="standard-basic"
        className={classes.shortenedLink}
        label="Shortened Link"
        value={bitlink}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleCopy}
      >
        Copy
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={visitLink}
      >
        Visit Link
      </Button>
    </div>
  );
};

export default Bitlink;
