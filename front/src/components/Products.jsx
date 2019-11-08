import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    maxHeigth: 600,
    border: 0
  },
  media: {
    height: 300,
    width: 400
  },
  height: {
    height: 400
  }
});

const Products = function(props) {
  const classes = useStyles();

  const { productsState } = props;

  return productsState.map(item => (
    <div style={{ order: "1" }} key={item.name}>
      <Card className={classes.card}>
        <CardActionArea className={classes.height}>
          <CardMedia
            className={classes.media}
            component="img"
            height="140"
            image={item.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  ));
};

export default Products;
