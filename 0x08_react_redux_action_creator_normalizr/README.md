# 0x08. React Redux action creator+normalizr

This project focuses on learning Redux action creators, Normalizr for data normalization, and async actions in Redux.

## Learning Objectives

- Normalizr's purpose and how to use it
- schemas and normalization

of nested JSON

- core concepts of Redux
- Redux actions
- Redux action creators
- async actions in Redux
- how to write tests for Redux

## Tasks

### Task 0: Read data from a JSON

Create a function `getAllNotificationsByUser` that returns all context objects from notifications.json where the author id matches the userId.

### Task 1: Normalize a nested JSON

Use Normalizr to normalize the notifications data with user, message, and notification entities.

### Task 2: Filter a normalized Schema

Modify `getAllNotificationsByUser` to work with normalized data using only one loop.

### Task 3: Create actions for the course list

Create SELECT_COURSE and UNSELECT_COURSE action types and creators.

### Task 4: Create actions for the UI

Create LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, and HIDE_NOTIFICATION_DRAWER action types and creators.

### Task 5: Create actions for the notification list

Create MARK_AS_READ and SET_TYPE_FILTER action types and creators.

### Task 6: Bound the actions

Bind all action creators using Redux's bindActionCreators.

### Task 7: Async Action Creators

Implement async login action using Redux Thunk.

## Requirements

- Node 12.x.x
- npm 6.x.x
- All files must end with a new line
- All functions must be exported

## Author

ALU Software Engineering Program
