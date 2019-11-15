import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import Card from "@material-ui/core/Card";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ValorationContainer from "../containers/ValorationContainer";

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";

const useStyles = makeStyles({
  media: {
    height: 350,
    width: 550
  }
});

const Product = function ({ busqueda, handleAdd }) {
  const classes = useStyles();

  return (
    <div>
      <Card style={{ marginLeft: "7px", marginRight: "7px", }}>
        <Grid container style={{ display: "flex", padding: "15px", }}>
          <Grid style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", marginRight: "15px", }} item="md-6">
            <img
              className={classes.media}
              src={busqueda.img}
              style={{
                borderRadius: "10px",

              }}
            />
          </Grid>
          <hr />

          <Grid style={{ display: "flex", flex: 1, paddingLeft: "30px", flexDirection: "column", }} item="md-6">
            <Typography style={{ fontSize: "30px", fontFamily: "courier", marginBottom: "3px" }}>{String(busqueda.name).toUpperCase()}</Typography>

            <Typography style={{ fontSize: "20px", fontFamily: "courier", marginBottom: "7px" }}>${busqueda.price}</Typography>
            <Typography style={{ fontSize: "20px", fontFamily: "courier" }}>{busqueda.description}</Typography>



            <ValorationContainer comments={busqueda.commentsP} />
            <form>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", marginRight: "15px", marginTop: "50px" }}>
                <Button


                  type="submit"
                // style={{
                //   backgroundColor: "rgb(256,256,256)",

                // }}
                >
                  <img
                    id={busqueda.id}
                    onClick={handleAdd}
                    src={"/e70570ee529d8e7f5cc3344bf2d8ceb2.png"}
                    style={{
                      // filter: "invert(100%)",
                      height: "45px",
                      width: "60px"
                    }}
                  />
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>


      </Card>


      <div>
        <hr></hr>
        <Typography style={{ fontSize: "20px" }}>Comments</Typography>

        {busqueda.commentsP && busqueda.commentsP.length > 0 ? (
          busqueda.commentsP.map(item => (
            <div key={item.id}>
              {item.comment} {item.user["name"]}
            </div>
          ))
        ) : (
            <div>No se encontro comentarios</div>
          )}

        <p>
          <MessageOutlinedIcon style={{ height: "16px" }} /> email
        </p>
        <input />
      </div>
    </div>
  );
};

export default Product;
