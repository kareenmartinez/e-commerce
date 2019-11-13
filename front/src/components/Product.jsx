import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import scooter from "./scooter.png";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";

const useStyles = makeStyles({
  media: {
    height: 300,
    width: 400
  }
});

const Product = function ({ busqueda }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid style={{ order: "1" }} item="md-6">
          <img
            className={classes.media}
            src={busqueda.img}
            style={{
              height: "450px",
              width: "500px",
              borderRadius: "10px",
              padding: "1cm"
            }}
          />
        </Grid>

        <Grid style={{ order: "1" }} item="md-6">
          <Typography>{busqueda.name}</Typography>

          <Typography>{busqueda.description}</Typography>

          <Typography>${busqueda.price}</Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating value="5" readOnly />
          </Box>
        </Grid>

      </Grid>
      <form>
        <div>

          <Button
            
            // onClick={handleAdd}
            type="submit"
          >
            <img
              src={scooter}
              style={{
                height: "30px",
                width: "30px"
              }}
            />



          </Button>



        </div>
      </form>
      <div>
        <hr></hr>
        <Typography style={{ fontSize: "20px" }}>Comments</Typography>

        <p>
          <MessageOutlinedIcon style={{ height: "16px" }} /> email
        </p>
        <input />
      </div>
    </div>
  );
};

export default Product;
