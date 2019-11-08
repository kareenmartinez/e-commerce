import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1)
  }
}));

export default function Register(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form onSubmit={props.handleSubmit}>
        <Input
          onChange={props.handleChangeName}
          className={classes.input}
          placeholder="First name"
          inputProps={{
            "aria-label": "description"
          }}
          value={props.name}
          name="name"
        />
        <Input
          onChange={props.handleChangeLastName}
          placeholder="Last name"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
          value={props.lastname}
          name="lastname"
        />
        <Input
          onChange={props.handleChangeDirection}
          className={classes.input}
          placeholder="Address"
          inputProps={{
            "aria-label": "description"
          }}
          value={props.direction}
          name="direction"
        />

        <Input
          onChange={props.handleChangeEmail}
          placeholder="Email"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
          value={props.email}
          name="email"
          type="email"
        />
        <Input
          onChange={props.handleChangePassword}
          placeholder="Password"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
          value={props.password}
          name="password"
          type="password"
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
