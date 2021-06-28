import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
    padding: "10px",
  },
  title: {
    fontSize: "50px",
    textAlign: "center",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "bold",
    letterSpacing: "-1px",
    lineHeight: 1,
  },
  paper: {
    padding: "10px 10px",
    width: "100%",
    maxWidth: 450,
    margin: "0 auto",
  },
  button: {
    margin: "12px 5px 0 10px",
  },
  textField: {
    width: "58%",
  },
  shortenedLink: {
    width: "53%",
  },
  congrats: {
    fontFamily: "Helvetica Neue, sans-serif",
    fontSize: "14px",
  },
}));

export default useStyles;
