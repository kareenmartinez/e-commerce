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
import { connect } from "react-redux";
import { removeProduct } from "../store/actions/orderAction";

function Order(props) {
  let total = [];
  let verdaderoTotal = 0;
  const handleClick = item => {
    props.removeProduct(item, props.userId);
  };
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
            <Divider />
            {props.order &&
              props.order.item &&
              props.order.item.map(item => (
                <Grid container item="md-6">
                  <Box
                    key={item.id}
                    style={{
                      display: "flex ",
                      flexDirection: "row",
                      width: "600px"
                    }}
                  >
                    <Container
                      style={{
                        flex: 3,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Button>
                        <AddBoxOutlinedIcon />
                      </Button>
                      <Container
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Typography style={{ fontFamily: "courier" }}>
                          {item.quantity}
                        </Typography>
                      </Container>
                      <Button>
                        <IndeterminateCheckBoxOutlinedIcon />
                      </Button>
                    </Container>

                    <Container
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flex: 2
                      }}
                    >
                      <Typography style={{ fontFamily: "courier" }}>
                        {item.product.name}
                      </Typography>
                    </Container>
                    <Container
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flex: 1
                      }}
                    >
                      <Typography style={{ fontFamily: "courier" }}>
                        {item.product.price}
                      </Typography>
                      <Button
                        onClick={e => {
                          handleClick(item.id);
                        }}
                      >
                        <DeleteOutlineIcon />
                      </Button>
                    </Container>
                  </Box>
                </Grid>
              ))}

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
            <Divider />
            {props.order &&
              props.order.item &&
              props.order.item.map(item => {
                total.push(item.quantity * item.product.price);
                return (
                  <Grid
                    container
                    item="md-6"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 10
                    }}
                  >
                    <Typography style={{ fontFamily: "courier", flex: 4 }}>
                      {item.product.name}
                    </Typography>
                    <Container
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Typography style={{ fontFamily: "courier" }}>
                        {item.quantity}
                      </Typography>
                    </Container>
                    <Container
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Typography style={{ fontFamily: "courier" }}>
                        ${item.quantity * item.product.price}
                      </Typography>
                    </Container>
                  </Grid>
                );
              })}

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

              <Typography style={{ fontFamily: "courier" }}>
                {total.map(item => {
                  verdaderoTotal += item;
                  console.log(verdaderoTotal);
                })}
                ${verdaderoTotal}
              </Typography>
            </Grid>

            <Grid
              container
              item="md-6"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            ></Grid>
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
                  style={{
                    fontFamily: "courier",
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                    margin: 10
                  }}
                  onClick={() => {
                    buyProduct(user);
                    dropOrder();
                  }}
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

const mapStateToProps = state => {
  return {
    userId: state.userReducer.user.id,
    order: state.orderReducer.order
  };
};

const mapDispatchToProps = dispatch => ({
  removeProduct: (item, userId) => dispatch(removeProduct(item, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
