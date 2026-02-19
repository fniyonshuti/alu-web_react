# React Component

This project demonstrates advanced React concepts including class components, lifecycle methods, Higher-Order Components (HOC), and performance optimization.

## Learning Objectives

- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to utilize a Jest spy to verify that a function is being called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components to render

## Project Structure

### Task 0: Commence with class components

- Converted the App function into a React Class component
- File: `task_0/dashboard/src/App/App.js`

### Task 1: Lifecycles

- Added lifecycle methods to the App component
- Implemented keyboard event listener (Ctrl+H) to trigger logout
- Added tests for the event listener
- Files:
  - `task_1/dashboard/src/App/App.js`
  - `task_1/dashboard/src/App/App.test.js`

### Task 2: Handling Events

- Converted Notifications to a React Class component
- Created `markAsRead` function within Notifications
- Modified NotificationItem to call markAsRead on click
- Added comprehensive tests
- Files:
  - `task_2/dashboard/src/Notifications/Notifications.js`
  - `task_2/dashboard/src/Notifications/Notifications.test.js`
  - `task_2/dashboard/src/Notifications/NotificationItem.js`
  - `task_2/dashboard/src/Notifications/NotificationItem.test.js`

### Task 3: Reusable components & specialization

- Created BodySection component for containment
- Created BodySectionWithMarginBottom component for specialization
- Updated App component to use these new components
- Added comprehensive tests
- Files:
  - `task_3/dashboard/src/BodySection/BodySection.js`
  - `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js`
  - `task_3/dashboard/src/BodySection/BodySection.css`
  - `task_3/dashboard/src/BodySection/BodySection.test.js`
  - `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js`
  - `task_3/dashboard/src/App/App.js`

### Task 4: Create WithLogging HOC

- Created a Higher-Order Component for logging
- Logs component mount and unmount events
- Added tests for the HOC
- Files:
  - `task_4/dashboard/src/HOC/WithLogging.js`
  - `task_4/dashboard/src/HOC/WithLogging.test.js`

### Task 5: Performance Optimization

- Made NotificationItem a pure component using React.memo
- Implemented shouldComponentUpdate in Notifications
- Added tests for optimization behavior
- Files:
  - `task_5/dashboard/src/Notifications/NotificationItem.js`
  - `task_5/dashboard/src/Notifications/Notifications.js`
  - `task_5/dashboard/src/Notifications/Notifications.test.js`

## Running the Project

For each task directory:

```bash
cd task_X/dashboard
npm install
npm start
```

## Running Tests

```bash
cd task_X/dashboard
npm test
```

## Requirements

- Ubuntu 18.04 LTS
- Node 12.x.x
- npm 6.x.x

## Technologies Used

- React 16.14.0
- Enzyme for testing
- Jest for testing
- Webpack for bundling
- Babel for transpiling

## Author

ALU Web React Project
