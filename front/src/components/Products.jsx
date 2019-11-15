import React from "react";
import { Link } from "react-router-dom";

import scooter from "./scooter.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ValorationContainer from "../containers/ValorationContainer";

// import Container from "@material-ui/core/Container"

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    maxHeigth: 600,
    paddingTop: 10
  },
  media: {
    height: 300,
    width: 400,
    margin: 0,

    borderRadius: "2px",
  },
  height: {
    height: 400
  }
});

const Products = function ({ productsState, handleAdd, mostrarBusqueda, user }) {
  const classes = useStyles();
  return productsState.map(item => (
    <div
      style={{ order: "1", margin: "15px 0", boxSizing: "border-box" }}
      key={item.name}
    >
      <Card className={classes.card}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/product/${item.name}`}
          onClick={mostrarBusqueda(item.name)}
        >
          <CardActionArea className={classes.height}>
            <CardMedia
              className={classes.media}
              component="img"
              height="140"
              image={item.img}
            />
            <CardContent>
              <Typography style={{ fontFamily: "courier" }} gutterBottom variant="h8" component="h2">
                {String(item.name).toUpperCase()}
              </Typography>
              <Typography style={{ fontFamily: "courier" }} gutterBottom variant="h8" component="h3">
                $ {item.price}
              </Typography>
              {/* <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating value="5" readOnly />
              </Box> */}
              <ValorationContainer comments={item.commentsP} />
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions
          style={{
            display: "flex",
            flexDirection: "row",
            justifyConten: "flex-end"
          }}
        >
          <div>
            <Button>
              <img
                id={item.id}
                onClick={handleAdd}

                src={"/e70570ee529d8e7f5cc3344bf2d8ceb2.png"}
                style={{
                  height: "30px",
                  width: "30px"
                }}
              />
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  ));
};

export default Products;
