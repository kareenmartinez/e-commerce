import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { FormControl } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1)
  }
}));

export default function Register() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FormControl>
        <Input
          className={classes.input}
          placeholder="First name"
          inputProps={{
            "aria-label": "description"
          }}
        />
      </FormControl>
      <FormControl>
        <Input
          placeholder="Last name"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
        />
      </FormControl>
      <FormControl>
        <Input
          className={classes.input}
          placeholder="Address"
          inputProps={{
            "aria-label": "description"
          }}
        />
      </FormControl>
      <FormControl>
        <Input
          placeholder="Email"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
        />
      </FormControl>
      <FormControl>
        <Input
          placeholder="Password"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
        />
      </FormControl>
    </div>
  );
}
