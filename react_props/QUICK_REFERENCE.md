# React Props - Quick Implementation Reference

## Task 2: NotificationItem Component

### 1. Create NotificationItem.js

```javascript
// task_2/dashboard/src/Notifications/NotificationItem.js
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
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
```

### 2. Create NotificationItem.test.js

```javascript
// task_2/dashboard/src/Notifications/NotificationItem.test.js
import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  it("renders without crashing", () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it("renders correct html with type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
    expect(wrapper.find("li").text()).toBe("test");
  });

  it("renders correct html with html prop", () => {
    const wrapper = shallow(
      <NotificationItem type="default" html={{ __html: "<u>test</u>" }} />,
    );
    expect(wrapper.find("li").html()).toContain("<u>test</u>");
  });
});
```

### 3. Update Notifications.js

```javascript
// task_2/dashboard/src/Notifications/Notifications.js
import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        style={{
          float: "right",
          marginTop: "-70px",
          backgroundColor: "#fff",
          border: "none",
        }}
        aria-label="Close"
      >
        <img src={closeIcon} alt="close" />
      </button>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
```

### 4. Update Notifications.test.js

```javascript
// task_2/dashboard/src/Notifications/Notifications.test.js
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications component", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders NotificationItem elements", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it("first NotificationItem renders correct html", () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop("type")).toBe("default");
    expect(firstItem.prop("value")).toBe("New course available");
  });
});
```

---

## Task 4: CourseList & PropTypes

### 1. CourseListRow.js

```javascript
// task_4/dashboard/src/CourseList/CourseListRow.js
import React from "react";
import PropTypes from "prop-types";

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

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
```

### 2. CourseListRow.test.js

```javascript
// task_4/dashboard/src/CourseList/CourseListRow.test.js
import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow component", () => {
  describe("when isHeader is true", () => {
    it("renders one cell with colspan = 2 when textSecondCell is null", () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="Available courses" />,
      );
      expect(wrapper.find("th").length).toBe(1);
      expect(wrapper.find("th").prop("colSpan")).toBe("2");
    });

    it("renders two cells when textSecondCell is present", () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />,
      );
      expect(wrapper.find("th").length).toBe(2);
    });
  });

  describe("when isHeader is false", () => {
    it("renders two td elements", () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader={false}
          textFirstCell="ES6"
          textSecondCell="60"
        />,
      );
      expect(wrapper.find("td").length).toBe(2);
    });
  });
});
```

### 3. CourseList.js

```javascript
// task_4/dashboard/src/CourseList/CourseList.js
import React from "react";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";

function CourseList() {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        <CourseListRow
          isHeader={false}
          textFirstCell="ES6"
          textSecondCell="60"
        />
        <CourseListRow
          isHeader={false}
          textFirstCell="Webpack"
          textSecondCell="20"
        />
        <CourseListRow
          isHeader={false}
          textFirstCell="React"
          textSecondCell="40"
        />
      </tbody>
    </table>
  );
}

export default CourseList;
```

### 4. CourseList.test.js

```javascript
// task_4/dashboard/src/CourseList/CourseList.test.js
import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList component", () => {
  it("renders without crashing", () => {
    shallow(<CourseList />);
  });

  it("renders 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});
```

### 5. Update App.js with isLoggedIn

```javascript
// task_4/dashboard/src/App/App.js
import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
```

### 6. Update App.test.js

```javascript
// Add to existing tests:
it("does not display CourseList when logged out", () => {
  const wrapper = shallow(<App isLoggedIn={false} />);
  expect(wrapper.find(CourseList).length).toBe(0);
});

describe("when isLoggedIn is true", () => {
  it("does not include Login component", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).length).toBe(0);
  });

  it("includes CourseList component", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).length).toBe(1);
  });
});
```

### 7. Update Notifications.js with displayDrawer

```javascript
// task_4/dashboard/src/Notifications/Notifications.js
import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";

function Notifications({ displayDrawer }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <button aria-label="Close">
            <img src={closeIcon} alt="close" />
          </button>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
```

---

## Task 5: Shapes & Arrays

### 1. CourseShape.js

```javascript
// task_5/dashboard/src/CourseList/CourseShape.js
import PropTypes from "prop-types";

const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});

export default CourseShape;
```

### 2. NotificationItemShape.js

```javascript
// task_5/dashboard/src/Notifications/NotificationItemShape.js
import PropTypes from "prop-types";

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
});

export default NotificationItemShape;
```

### 3. Update CourseList.js with arrays

```javascript
// task_5/dashboard/src/CourseList/CourseList.js
import React from "react";
import PropTypes from "prop-types";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
```

### 4. Update App.js with arrays

```javascript
// task_5/dashboard/src/App/App.js
const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

// In render:
<Notifications displayDrawer={true} listNotifications={listNotifications} />
<CourseList listCourses={listCourses} />
```

### 5. Update Notifications.js with arrays

```javascript
// task_5/dashboard/src/Notifications/Notifications.js
function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <button aria-label="Close">
                <img src={closeIcon} alt="close" />
              </button>
              <ul>
                {list Notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
```

---

## Setup Commands

```bash
# Copy tasks
cd react_props
cp -r task_1 task_2
cp -r task_2 task_4
cp -r task_4 task_5

# Install prop-types in task_4 and task_5
cd task_4/dashboard && npm install --save prop-types
cd ../../task_5/dashboard && npm install --save prop-types

# Run tests
npm test
npm run test-watch
```

---

This quick reference provides all the code you need to complete tasks 2, 4, and 5!
