import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
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

function Header({ fetchProducts }) {

  //console.log(req.user.id, "ssssssssssssssss")



  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const closeAndFetch = country => {
    handleClose();
    fetchProducts(country);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //categorias en el menu del header
  const countries = ["Peru", "Mexico", "Argentina", "Brazil", "Ecuador"];
  countries.sort();

  return (
    <div>
      <div className={classes.jumbotron}>
        <Grid
          container
          direction="column"
          alignItems="center"
          item="md-12"
          style={{ height: "100%", justifyContent: "center" }}
        >
          <Typography style={{ fontFamily: "courier", fontSize: "40px" }}>
            SUPER RESTAURANTE
          </Typography>
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
                  <Link style={{textDecoration:"none", color:"black"}}to={{ pathname: `/categories/${pais}` }} key={pais}>
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
              onChange={props.handleChange}
              placeholder="Search…"
              value={props.search}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <Button onClick={props.handleSubmit}>
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
            <Grid item="md-2">
              <Link to="/logIn">
                <Button>Log In</Button>
              </Link>
            </Grid>
            <Grid item="md-2">
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  fetchProducts: item => {
    dispatch(fetchProducts(item));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
