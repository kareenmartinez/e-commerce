import React from "react";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";

class FacebookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
      userId: "",
      name: "",
      email: "",
      picture: ""
    };
    this.componentClicked = this.componentClicked.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  componentClicked() {
    console.log("clicked");
  }

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
    } else {
      fbContent = (
        <FacebookLogin
          appId="410515629859037"
          autoLoad={true}
          fields="name,email, picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookContainer);
