import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import logo from "./loguish.png";
import scooter from "./scooter.png";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import { fetchProducts } from "../store/actions/CategoriesAction";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  jumbotron: {
    width: "100%",
    height: "20vh",
    backgroundColor: "black",
    color: "white"
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  search: {
    position: "relative",

    marginLeft: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    width: "100%"
  }
});

function Header({
  handleChange,
  handleSubmit,
  search,
  fetchProducts,
  user,
  logout,
  userFacebook
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const closeAndFetch = country => {
    handleClose();
    fetchProducts(country);
  };
  const countries = ["Peru", "Mexico", "Argentina", "Brazil", "Ecuador"];
  countries.sort();

  return (
    <div>
      <div className={classes.jumbotron} style={{ borderRadius: "7px" }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          item="md-12"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Grid style={{ order: "1" }} className="col-md-6">
              <img style={{ height: "60px", width: "70px" }} src={"/5b590c7b0688493b8205456bdaa91b92.png"} />
            </Grid>
          </Link>

          <Grid style={{ order: "5" }} className="col-md-6">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <Typography style={{ fontFamily: "roboto", fontSize: "40px" }}>
                SUPER RESTAURANTE
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
      <br />
      <div>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          container
        >
          <Grid item="md-2">
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ fontFamily: "courier", size: "large" }}
              >
                Menu
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {countries.map(pais => (
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={{ pathname: `/categories/${pais}` }}
                    key={pais}
                  >
                    <MenuItem
                      style={{ fontFamily: "courier" }}
                      onClick={e => {
                        closeAndFetch(pais);
                      }}
                    >
                      {pais}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </div>
          </Grid>

          <Grid item="md-4">
            <div className={classes.search}>
              <InputBase
                onChange={handleChange}
                placeholder="Search…"
                value={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <Button style={{ size: "large" }} onClick={handleSubmit}>
                <SearchIcon />
              </Button>
            </div>
          </Grid>

          <div>
            {user.name ? (
              <div>
                <Typography style={{ fontFamily: "roboto", fontSize: "15px" }} variant="h8" component="h3">
                  <i>{user.name} {user.lastName}</i>
                </Typography>
              </div>
            ) : null}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            {userFacebook ? (
              <Link style={{ textDecoration: "none" }} to="/">
                <Grid item="md-2" >
                  <Button style={{ fontFamily: "courier", size: "large" }} onClick={logout}>Log Out</Button>
                </Grid>
              </Link>
            ) : !user.email ? null : (
              <Link style={{ textDecoration: "none" }} to="/">
                <Grid item="md-2">
                  <Button style={{ fontFamily: "courier", size: "large" }} onClick={logout}>Log Out</Button>
                </Grid>
              </Link>
            )}

            {userFacebook ? null : !user.email ? (
              <Grid item="md-2">
                <Link style={{ textDecoration: "none" }} to="/logIn">
                  <Button style={{ fontFamily: "courier", size: "large" }}>Log In</Button>
                </Link>
              </Grid>
            ) : null}

            {userFacebook ? null : !user.email ? (
              <Link style={{ textDecoration: "none" }} to="/signup">
                <Grid item="md-2">
                  <Button style={{ fontFamily: "courier", size: "large" }}>Sign Up</Button>
                </Grid>
              </Link>
            ) : null}

            {user.id ? (
              <Link style={{ textDecoration: "none" }} to={`/order/${user.id}`}>
                <Grid item="md-2">
                  <Button style={{ size: "large" }}>
                    <img

                      src={"/e70570ee529d8e7f5cc3344bf2d8ceb2.png"}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </Button>
                </Grid>
              </Link>
            ) : null}
          </div>
        </Grid>
      </div>
    </div >
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: item => {
    dispatch(fetchProducts(item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
