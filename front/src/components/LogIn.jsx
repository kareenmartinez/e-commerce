import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";

import FacebookContainer from "../containers/FacebookContainer";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1)
  }
}));
export default function LogIn({ onSubmit, handleEmail, handlePassword }) {
  const classes = useStyles();
  return (
    <div>
      <form onSubmit={onSubmit} method="POST">
        <Input
          onChange={handleEmail}
          placeholder="Email"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
        />
        <Input
          onChange={handlePassword}
          placeholder="Password"
          type="password"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
        />
        <Button style={{ fontFamily: "courier" }} type="submit">Submit</Button>
      </form>

      <FacebookContainer />
    </div>
  );
}
