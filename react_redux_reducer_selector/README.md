# React Redux Reducer Selector

This project demonstrates the use of Redux reducers, Immutable.js, Normalizr, and selectors in a React application.

## Learning Objectives

By the end of this project, you should understand:

- The purpose of a reducer and its role within your application
- Why a reducer should stay as pure as possible
- Why mutations should not happen within a reducer
- The use of Immutable within the reducer
- The use of Normalizr within the app
- Selectors: what they are and when to use them

## Tasks

### Task 0: Write a basic reducer

- Created UI reducer with initial state
- Implemented reducer function with actions for notification drawer and login
- Added comprehensive test suite

### Task 1: Use Immutable for the UI Reducer

- Installed Immutable.js
- Updated UI reducer to use Immutable Map
- Updated tests to work with Immutable.js

### Task 2: Create a reducer for Courses

- Created course action types (FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE)
- Implemented course reducer with proper state management
- Added tests for all course actions

### Task 3: Create the reducer for notifications

- Created notification action types (FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER)
- Implemented notification reducer with filter and notifications state
- Added comprehensive test suite

### Task 4: Normalizr & Immutable

- Created schema for courses and notifications using Normalizr
- Updated reducers to use Immutable.js Maps
- Implemented normalization for both courses and notifications
- Updated all tests to work with normalized, immutable state

### Task 5: Selectors

- Created notification selectors:
  - `filterTypeSelected`: Returns the current filter value
  - `getNotifications`: Returns all notifications as a Map
  - `getUnreadNotifications`: Returns only unread notifications as a Map
- Added comprehensive test suite for selectors

## Running Tests

To run tests for any task, navigate to the task directory and run:

```bash
cd task_X/dashboard
npm install
npm test
```

## Test Results

All tasks have been completed and all tests are passing:

- **Task 0**: ✅ 4 tests passing
- **Task 1**: ✅ 4 tests passing
- **Task 2**: ✅ 5 tests passing
- **Task 3**: ✅ 5 tests passing
- **Task 4**: ✅ 9 tests passing
- **Task 5**: ✅ 12 tests passing

## Requirements

- Node 12.x.x
- npm 6.x.x
- Ubuntu 18.04 LTS (or compatible environment)

## Dependencies

- React
- Immutable.js (^4.0.0)
- Normalizr (^3.6.2)
- @testing-library/react
- @testing-library/jest-dom

## Repository

- **GitHub repository**: alu-web_react
- **Directory**: react_redux_reducer_selector

## Author

ALU Software Engineering Program
