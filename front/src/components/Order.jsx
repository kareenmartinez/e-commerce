import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Divider from "@material-ui/core/Divider";

import Card from "@material-ui/core/Card";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";

export default function Order({ user, buyProduct }) {
  return (
    <div>
      <Grid
        container
        alignItems="stretch"
        direction="row"
        justify="space-evenly"
      >
        <Card>
          <Grid item="md-6">
            <Container style={{ display: "flex", alignItems: "center" }}>
              <Typography style={{ fontFamily: "courier" }}>
                ORDER LIST
              </Typography>
            </Container>

            <Grid container item="md-6">
              <Box
                style={{
                  display: "flex ",
                  flexDirection: "row",
                  width: "600px"
                }}
              >
                <Button>
                  <AddBoxOutlinedIcon />
                </Button>{" "}
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Typography style={{ fontFamily: "courier" }}>0</Typography>
                </Container>
                <Button>
                  <IndeterminateCheckBoxOutlinedIcon />
                </Button>
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Typography style={{ fontFamily: "courier" }}>
                    Aji de gallina
                  </Typography>
                </Container>
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {" "}
                  <Typography style={{ fontFamily: "courier" }}>
                    $130
                  </Typography>
                </Container>
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Button>
                    <DeleteOutlineIcon />
                  </Button>
                </Container>
              </Box>
            </Grid>
            <Divider />
            <Grid container item="md-6">
              <Box>
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Typography style={{ fontFamily: "courier" }}>
                    ORDER OPTIONS
                  </Typography>
                </Container>
                <Button style={{ fontFamily: "courier" }}>
                  <AddLocationOutlinedIcon /> ADD NEW ADDRESS
                </Button>
              </Box>
            </Grid>
            <Grid
              container
              item="md-6"
              style={{
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Button style={{ fontFamily: "courier" }}> CONFIRM</Button>
            </Grid>
          </Grid>
        </Card>
        <Card>
          <Grid item="md-6" style={{ width: "600px" }}>
            <Container style={{ display: "flex", alignItems: "center" }}>
              <Typography style={{ fontFamily: "courier" }}>RESUME</Typography>
            </Container>
            <Grid
              container
              item="md-6"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Typography style={{ fontFamily: "courier" }}>
                Aji de gallina{" "}
              </Typography>{" "}
              <Typography style={{ fontFamily: "courier" }}> 1 </Typography>
              <Typography style={{ fontFamily: "courier" }}>$130</Typography>
            </Grid>
            <Grid
              container
              item="md-6"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Typography style={{ fontFamily: "courier" }}>
                Lomo salteado
              </Typography>{" "}
              <Typography style={{ fontFamily: "courier" }}> 1 </Typography>
              <Typography style={{ fontFamily: "courier" }}>$230</Typography>
            </Grid>
            <Divider />

            <Grid
              container
              item="md-6"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <Typography style={{ fontFamily: "courier" }}>TOTAL </Typography>
              <Typography style={{ fontFamily: "courier" }}>$360</Typography>
            </Grid>
            <Grid
              container
              item="md-6"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignSelf: "flex-end"
              }}
            >
              <form>
                <Button
                  type="submit"
                  style={{ fontFamily: "courier" }}
                  onClick={buyProduct(user)}
                >
                  BUY
                </Button>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}
