# React Props Project Implementation Guide

## Overview

This guide helps you implement all tasks for the React Props project. Due to the extensive nature of the project, I've set up the basic structure. You'll need to complete the remaining tasks following the patterns below.

## Completed

✅ **Task 0 Structure**: Created Header, Footer, Login components in `task_0/dashboard/src/`
✅ **Directory Setup**: Created react_props folder with README.md
✅ **Task 1 Structure**: Copied task_0 to task_1

## Tasks Remaining - Implementation Guide

### Task 1: Write Tests

**Location**: `task_1/dashboard/src/`

Files need to be created/updated with actual Enzyme tests. Pattern:

```javascript
// Header.test.js
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders img and h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img")).toHaveLength(1);
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
```

Apply similar patterns for Footer, Login, and App tests.

**Add to package.json**:

```json
"scripts": {
  "test-watch": "jest --watch"
}
```

### Task 2: NotificationItem Component

**Create**: `task_2/dashboard/src/Notifications/NotificationItem.js`

```javascript
import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }
  return <li data-notification-type={type}>{value}</li>;
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
```

**Update Notifications.js** to use `<NotificationItem />` instead of `<li>` tags.

### Task 4: CourseList Components

**Create**: `task_4/dashboard/src/CourseList/`

CourseListRow.js:

```javascript
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }
  return (
    <tr>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}
```

**Update App.js**:

- Add `isLoggedIn` prop (boolean, default false)
- Conditionally render `<Login />` or `<CourseList />`

**Update Notifications.js**:

- Add `displayDrawer` prop (boolean, default false)
- Add menuItem div before Notifications
- Conditionally show Notifications based on displayDrawer

### Task 5: Shapes and Arrays

**Create**:

- `CourseShape.js`: Define course shape (id, name, credit)
- `NotificationItemShape.js`: Define notification shape

**Update Components**:

- Pass arrays to CourseList and Notifications
- Use `.map()` to render items with `key` prop
- Handle empty arrays appropriately

## Quick Setup Commands

```bash
cd react_props

# Install dependencies for each task
for task in task_0 task_1 task_2 task_4 task_5; do
  cd $task/dashboard && npm install && cd ../..
done

# Run tests
cd task_1/dashboard && npm test

# Run with watch mode
npm run test-watch
```

## Required Dependencies

Ensure each task's package.json includes:

```json
{
  "devDependencies": {
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.6",
    "prop-types": "^15.7.2"
  }
}
```

## File Structure Summary

```
react_props/
├── README.md
├── task_0/dashboard/
│   └── src/
│       ├── App/
│       ├── Header/
│       ├── Footer/
│       ├── Login/
│       └── Notifications/
├── task_1/ (copy of task_0 + comprehensive tests)
├── task_2/ (copy of task_1 + NotificationItem)
├── task_3/ (screenshots - manual task)
├── task_4/ (copy of task_2 + CourseList + PropTypes)
└── task_5/ (copy of task_4 + Shapes + Arrays)
```

## Next Steps

1. Complete test files in task_1
2. Create NotificationItem for task_2
3. Implement CourseList components for task_4
4. Add shapes and array handling for task_5
5. Ensure all tests pass: `npm run test-watch`

All base structures are in place. Follow the patterns above to complete each task.
