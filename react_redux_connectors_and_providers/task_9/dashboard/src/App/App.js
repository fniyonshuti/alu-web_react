import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotificationsContainer from "../Notifications/NotificationsContainer";
import Login from "../Login/Login";
import CourseListContainer from "../CourseList/CourseListContainer";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import {
  loginRequest,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators";
import "./App.css";

class App extends Component {
  render() {
    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      login,
    } = this.props;

    return (
      <>
        <NotificationsContainer
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
        <div className="App">
          <Header />
          <div className="App-body">
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={login} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseListContainer />
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
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get("isUserLoggedIn"),
    displayDrawer: state.ui.get("isNotificationDrawerVisible"),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
};

export { App as AppWithoutConnect };
export default connect(mapStateToProps, mapDispatchToProps)(App);
