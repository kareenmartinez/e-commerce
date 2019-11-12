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

function Header({ handleChange, handleSubmit, search, fetchProducts, user }) {
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

  console.log(user);

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
              <img style={{ height: "60px", width: "70px" }} src={logo} />
            </Grid>
          </Link>

          <Grid style={{ order: "5" }} className="col-md-6">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <Typography style={{ fontFamily: "courier", fontSize: "40px" }}>
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
            justifyContent: "space-between"
          }}
          container
        >
          <Grid item="md-2">
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
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
              <Button onClick={handleSubmit}>
                <SearchIcon />
              </Button>
            </div>
          </Grid>

          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            {user.email === undefined ? (
              console.log("noooooooo hay user")
            ) : (
                <Grid item="md-2">
                  <Button>Log Out</Button>
                </Grid>
              )}

            {user.email === undefined ? (
              <Grid item="md-2">
                <Link style={{ textDecoration: "none" }} to="/logIn">
                  <Button>Log In</Button>
                </Link>
              </Grid>
            ) : (
                ""
              )}

            {user.email === undefined ? (
              <Link style={{ textDecoration: "none" }} to="/signup">
                <Grid item="md-2">
                  <Button>Sign Up</Button>
                </Grid>
              </Link>
            ) : (
                ""
              )}


            <Link style={{ textDecoration: "none" }} to="/order">
              <Grid item="md-2">
                <Button>
                  <img src={scooter} style={{ height: "30px", width: "30px" }} />
                </Button>
              </Grid>
            </Link>

          </div>
        </Grid>
      </div>
    </div>
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
