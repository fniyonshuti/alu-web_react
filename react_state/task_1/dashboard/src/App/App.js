import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      listCourses: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    const { isLoggedIn, displayDrawer } = this.props;
    const { user, listCourses } = this.state;

    return (
      <>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={() => {}}
          handleHideDrawer={() => {}}
        />
        <div className="App">
          <Header user={user} logout={this.logOut} />
          <div className="App-body">
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
  };
};

export { App as AppWithoutConnect };
export default connect(mapStateToProps)(App);
