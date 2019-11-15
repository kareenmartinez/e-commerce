import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";

export function History({ handleHistory, historyClick, user, history }) {
  return (
    <div>
      <Button id={user.id} onClick={handleHistory} type="button">
        History
      </Button>
      <Paper style={{ maxHeight: 200, overflow: "auto" }}>
        <List>
          {history
            ? history.map(compra => {
                compra.item.map((item, indice) => {
                  let quantity = item.quantity;
                  let { name, price } = item.product;

                  return (
                    <div key={indice}>
                      <Typography>{name}</Typography>
                      <Typography>${price}</Typography>
                      <Typography>{quantity}</Typography>
                    </div>
                  );
                });
              })
            : null}
        </List>
      </Paper>
    </div>
  );
}
