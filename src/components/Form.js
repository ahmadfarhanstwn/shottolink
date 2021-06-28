import React, { useState } from "react";
import fetchApi from "../api/fetchApi";
import { TextField, Button } from "@material-ui/core";
import Alert from "./Alert";
import useStyles from "../style/useStyles";

const Form = ({ setBitlink, bitLink }) => {
  const [link, setLink] = useState("");
  const [linkStatus, setLinkStatus] = useState("");
  const [linkIncorrect, setLinkIncorrect] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const validatingLink = (link) => {
    let linkNotValid = "";

    if (link) {
      const urlRegex =
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      const validLink = link.match(urlRegex) !== null;

      linkNotValid = validLink ? "" : "Url is not valid";
    }

    setLinkStatus(linkNotValid);
    const linkIsValid = linkNotValid === "";
    return linkIsValid;
  };

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const linkIsValid = validatingLink(link);

    if (linkIsValid) {
      const bitLink = await fetchApi(link);
      setLinkIncorrect(false);
      setBitlink(bitLink);
    } else {
      setLinkIncorrect(true);
      setBitlink("");
    }

    setOpen(false);
  };

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <form onSubmit={bitLink ? handleClickOpen : handleSubmit}>
        <TextField
          required
          className={classes.textField}
          error={linkIncorrect}
          label="Input Your URL"
          onChange={handleChange}
          value={link}
          type="text"
          id={linkIncorrect ? "standard-error-helper-text" : "standard-basic"}
          helperText={linkStatus}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Get Shorten URL
        </Button>
      </form>
      <Alert
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        open={open}
      />
    </div>
  );
};

export default Form;
