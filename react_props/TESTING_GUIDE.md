# Quick Testing Guide - React Props Project

## 🧪 How to Run Tests for All Tasks

This guide will help you install dependencies and run tests for all completed tasks.

---

## Prerequisites

Make sure you have Node.js and npm installed:

```bash
node --version  # Should be 12.x.x or higher
npm --version   # Should be 6.x.x or higher
```

---

## Step-by-Step Testing Instructions

### 1. Task 1 - Basic Component Tests

```bash
# Navigate to task_1
cd "c:\Users\LENOVO\Desktop\fred\web development\alu-web_react\react_props\task_1\dashboard"

# Install dependencies
npm install

# Run tests once
npm test

# Or run tests in watch mode (recommended for development)
npm run test-watch
```

**Expected Output:**

```
Test Suites: 4 passed, 4 total
Tests:       7 passed, 7 total
```

**What's Being Tested:**

- ✅ Header renders img and h1
- ✅ Footer renders "Copyright"
- ✅ Login renders 2 inputs and 2 labels
- ✅ App contains all 4 components

---

### 2. Task 2 - NotificationItem Tests

```bash
# Navigate to task_2
cd "../../../task_2/dashboard"

# Install dependencies
npm install

# Run tests
npm test
```

**Expected Output:**

```
Test Suites: 5 passed, 5 total
Tests:       11 passed, 11 total
```

**What's Being Tested:**

- ✅ NotificationItem renders with different props
- ✅ NotificationItem handles html prop correctly
- ✅ NotificationItem has correct PropTypes
- ✅ All Task 1 tests still pass

---

### 3. Task 4 - CourseList & PropTypes Tests

```bash
# Navigate to task_4
cd "../../../task_4/dashboard"

# Install dependencies (including prop-types)
npm install

# Run tests
npm test
```

**Expected Output:**

```
Test Suites: 9 passed, 9 total
Tests:       ~25 passed, ~25 total
```

**What's Being Tested:**

- ✅ CourseListRow renders header rows with th elements
- ✅ CourseListRow renders body rows with td elements
- ✅ CourseList renders 5 rows
- ✅ App shows Login when isLoggedIn=false
- ✅ App shows CourseList when isLoggedIn=true
- ✅ Notifications shows/hides based on displayDrawer prop

---

### 4. Task 5 - Array Handling Tests

```bash
# Navigate to task_5
cd "../../../task_5/dashboard"

# Install dependencies
npm install

# Run tests
npm test
```

**Expected Output:**

```
Test Suites: 9 passed, 9 total
Tests:       ~33 passed, ~33 total
```

**What's Being Tested:**

- ✅ CourseList handles empty array (shows "No course available yet")
- ✅ CourseList renders courses from array with keys
- ✅ Notifications handles empty array (shows "No new notification for now")
- ✅ Notifications renders notifications from array with keys
- ✅ All previous tests still pass

---

## 🐛 Troubleshooting

### Issue: "Cannot find module 'prop-types'"

**Solution:**

```bash
npm install --save prop-types
```

### Issue: "Cannot find module 'enzyme'"

**Solution:**

```bash
npm install --save-dev enzyme enzyme-adapter-react-16
```

### Issue: Tests fail with "Adapter not configured"

**Solution:** Verify `.babelrc` exists with correct content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### Issue: "webpack: command not found" when running npm start

**Solution:**

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

### Issue: Tests pass locally but fail in CI/CD

**Solution:** Make sure all dependencies are in package.json and run:

```bash
npm ci  # Clean install from package-lock.json
npm test
```

---

## 🚀 Running the Development Server

For any task, you can start the dev server:

```bash
# Make sure you're in a task's dashboard folder
cd "c:\Users\LENOVO\Desktop\fred\web development\alu-web_react\react_props\task_5\dashboard"

# Start the server
npm start
```

The app will open at: http://localhost:8080

**Hot Reload:** Changes to code will automatically reload the browser!

---

## 📊 Test Coverage Details

### Task 1 Tests (7 total)

| Component | Test                     | File           |
| --------- | ------------------------ | -------------- |
| App       | Renders without crashing | App.test.js    |
| App       | Contains Notifications   | App.test.js    |
| App       | Contains Header          | App.test.js    |
| App       | Contains Login           | App.test.js    |
| App       | Contains Footer          | App.test.js    |
| Header    | Renders img tag          | Header.test.js |
| Header    | Renders h1 tag           | Header.test.js |
| Footer    | Renders "Copyright"      | Footer.test.js |
| Login     | Renders 2 inputs         | Login.test.js  |
| Login     | Renders 2 labels         | Login.test.js  |

### Task 2 Additional Tests (4 new)

| Component        | Test                           | File                     |
| ---------------- | ------------------------------ | ------------------------ |
| NotificationItem | Renders without crashing       | NotificationItem.test.js |
| NotificationItem | Renders correct type and value | NotificationItem.test.js |
| NotificationItem | Renders html prop correctly    | NotificationItem.test.js |
| Notifications    | Renders 3 NotificationItems    | Notifications.test.js    |

### Task 4 Additional Tests (~14 new)

| Component     | Test                                    | File                  |
| ------------- | --------------------------------------- | --------------------- |
| CourseListRow | Renders header row with th              | CourseListRow.test.js |
| CourseListRow | Renders body row with td                | CourseListRow.test.js |
| CourseListRow | Renders single th with colspan          | CourseListRow.test.js |
| CourseList    | Renders without crashing                | CourseList.test.js    |
| CourseList    | Renders 5 rows                          | CourseList.test.js    |
| App           | Doesn't show CourseList when logged out | App.test.js           |
| App           | Doesn't show Login when logged in       | App.test.js           |
| App           | Shows CourseList when logged in         | App.test.js           |
| Notifications | Shows menuItem when displayDrawer=false | Notifications.test.js |
| Notifications | Hides panel when displayDrawer=false    | Notifications.test.js |
| Notifications | Shows menuItem when displayDrawer=true  | Notifications.test.js |
| Notifications | Shows panel when displayDrawer=true     | Notifications.test.js |

### Task 5 Additional Tests (~8 new)

| Component     | Test                                 | File                  |
| ------------- | ------------------------------------ | --------------------- |
| CourseList    | Renders with listCourses array       | CourseList.test.js    |
| CourseList    | Shows "No course" when empty         | CourseList.test.js    |
| CourseList    | Renders correct number of rows       | CourseList.test.js    |
| Notifications | Renders with listNotifications array | Notifications.test.js |
| Notifications | Shows "No notification" when empty   | Notifications.test.js |
| Notifications | Renders correct number of items      | Notifications.test.js |
| Notifications | First item has correct props         | Notifications.test.js |

---

## 🎯 Quick Commands Reference

```bash
# Install dependencies
npm install

# Run all tests once
npm test

# Run tests in watch mode (reruns on file changes)
npm run test-watch

# Run tests with coverage
npm test -- --coverage

# Start development server
npm start

# Build for production
npm run build

# Build for development (with source maps)
npm run build-dev
```

---

## ✅ Verification Checklist

After running tests for each task, verify:

- [ ] Task 1: All 7+ tests pass
- [ ] Task 2: All 11+ tests pass
- [ ] Task 4: All 25+ tests pass
- [ ] Task 5: All 33+ tests pass
- [ ] No console warnings about missing PropTypes
- [ ] No console errors about missing keys
- [ ] Dev server starts successfully
- [ ] App renders correctly in browser

---

## 📝 Notes

- **Order matters:** Run tests from Task 1 → Task 2 → Task 4 → Task 5
- **Task 0:** No tests (just basic setup)
- **Task 3:** Manual screenshot task (no automated tests)
- **Watch mode:** Press `q` to quit watch mode
- **Coverage:** Add `--coverage` flag to see code coverage report

---

## 🎉 Success Criteria

You'll know everything is working when:

1. ✅ All test suites pass (green checkmarks)
2. ✅ No errors or warnings in console
3. ✅ Dev server starts at http://localhost:8080
4. ✅ App renders correctly in browser
5. ✅ Components update when you change code (hot reload)

---

**Happy Testing! 🚀**

If you encounter any issues not covered here, check:

- Node/npm versions are correct
- All dependencies are installed
- You're in the correct directory
- package.json has all required scripts
