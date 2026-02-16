# React Redux Connectors and Providers

This project builds upon the React Redux Reducer Selector project to implement Redux connectors, providers, async actions with Redux Thunk, selectors, and best practices for React-Redux applications.

## Learning Objectives

- Redux connectors and how to use them
- The different functions you can pass to a connector (mapStateToProps, mapDispatchToProps)
- How to map an action creator to a component using a connector
- How to map an async action creator to a component with Redux Thunk
- What Redux Providers are and how to set up your app's store
- How to improve a connector's performance using Reselect
- How to use Redux's dev tools to debug the state of your application

## Project Structure

The project is divided into 10 task directories (task_0 through task_9), each building upon the previous one:

### Tasks 0-2: Basic Redux Connection

- **Task 0**: Create mapStateToProps in App.js to connect isLoggedIn from uiReducer
- **Task 1**: Create store with createStore and wrap App with Provider in index.js
- **Task 2**: Write tests for mapStateToProps function

### Tasks 3-6: Enhanced Connections

- **Task 3**: Update mapStateToProps to include displayDrawer from isNotificationDrawerVisible
- **Task 4**: Connect action creators (displayNotificationDrawer, hideNotificationDrawer) using mapDispatchToProps
- **Task 5**: Refactor App.js to remove old state management, add propTypes and defaultProps
- **Task 6**: Update tests to reflect new Redux architecture

### Tasks 7-12: Async Actions with Redux Thunk

- **Task 7**: Install redux-thunk and apply middleware to store
- **Task 8**: Connect loginRequest action creator to App component
- **Task 9**: Connect Footer to user state from Redux
- **Task 10**: Connect Header to user state and logout action
- **Task 11**: Modify uiReducer to handle LOGIN and LOGOUT with user data
- **Task 12**: Update all test suites to test stateless components

### Tasks 13-16: Root Reducer

- **Task 13**: Install Redux DevTools extension support
- **Task 14**: Create rootReducer combining all reducers (courses, notifications, ui)
- **Task 15**: Update index.js to use rootReducer in createStore
- **Task 16**: Write tests for rootReducer and update existing tests

### Tasks 17-21: Connect Notifications

- **Task 17**: Create action creators for notifications API (setLoadingState, setNotifications, fetchNotifications)
- **Task 18**: Improve notificationReducer with loading state and mergeDeep
- **Task 19**: Connect Notifications component to reducer and fetch on mount
- **Task 20**: Clean up old notification code from App
- **Task 21**: Update all notification-related tests

### Tasks 22-25: Connect Courses

- **Task 22**: Use getUnreadNotifications selector in Notifications
- **Task 23**: Create course selector (getAllCourses) using valueSeq
- **Task 24**: Create fetchCourses action creator
- **Task 25**: Connect CourseList component with selectors and actions

### Tasks 26-28: Memoized Selectors with Reselect

- **Task 26**: Install Reselect and create getUnreadNotificationsByType memoized selector
- **Task 27**: Update Notifications to use new selector and add filter buttons
- **Task 28**: Update tests for memoized selectors

### Task 29: Container/Component Pattern

- **Task 29**: Create NotificationsContainer as connected component, make Notifications purely presentational

## Requirements

- Node 12.x.x
- npm 6.x.x
- Ubuntu 18.04 LTS (or compatible environment)

## Dependencies

- React (^19.2.4)
- Redux
- React-Redux
- Redux Thunk
- Immutable.js (^4.0.0)
- Normalizr (^3.6.2)
- Reselect
- @testing-library/react
- @testing-library/jest-dom

## Running the Project

For any task, navigate to the task directory and run:

```bash
cd task_X/dashboard
npm install
npm start
```

## Running Tests

To run tests for any task:

```bash
cd task_X/dashboard
npm test
```

## API Endpoints

The application uses the following mock API endpoints (from /dist folder):

- `/dist/courses.json` - Course data
- `/dist/notifications.json` - Notification data
- `/dist/login-success.json` - Login response data

## Components

- **App**: Main application container
- **Header**: Application header with user info and logout
- **Footer**: Application footer with user-specific content
- **Notifications**: Notifications panel with filtering
- **NotificationsContainer**: Connected container for Notifications (Task 29)
- **CourseList**: List of courses with selection
- **CourseListRow**: Individual course row component
- **BodySection**: Section wrapper component
- **BodySectionWithMarginBottom**: Section wrapper with margins

## Redux Architecture

### Actions

- **UI Actions**: LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER
- **Notification Actions**: FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE
- **Course Actions**: FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE

### Reducers

- **uiReducer**: Manages UI state (drawer visibility, user login)
- **notificationReducer**: Manages notifications and filters
- **courseReducer**: Manages courses and selections
- **rootReducer**: Combines all reducers

### Selectors

- **Notification Selectors**: filterTypeSelected, getNotifications, getUnreadNotifications, getUnreadNotificationsByType
- **Course Selectors**: getAllCourses

## Repository

- **GitHub repository**: alu-web_react
- **Directory**: react_redux_connectors_and_providers

## Author

ALU Software Engineering Program - 2026
