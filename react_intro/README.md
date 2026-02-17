# React Intro

This project contains introductory React tasks demonstrating fundamental React concepts, JSX, component composition, testing with Enzyme, and Webpack configuration.

## Learning Objectives

- How to create a basic Javascript application using React
- How to use the package create-react-app to start developing quickly with React
- What JSX is and how to use it
- How to use the React Developer Tools to debug your code
- How to use Enzyme's shallow rendering to test your application
- How to use React with Webpack & Babel

## Requirements

- All files are interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
- All files should end with a new line
- No lint errors when running the applications

## Tasks

### Task 0: Basic application

**Directory:** `task_0/dashboards/`

Create a basic React app using create-react-app with:

- Header div with Holberton logo and "School dashboard" text
- Body div with "Login to access the full dashboard" text
- Footer div with copyright information
- Custom styling in App.css

**Files:**

- `task_0/dashboards/src/App.js`
- `task_0/dashboards/src/App.css`

### Task 1: Embedding expressions, functions

**Directory:** `task_1/dashboard/`

Extend the previous task by adding:

- Utility functions: `getFullYear()`, `getFooterCopy(isIndex)`, `getLatestNotification()`
- Notifications component that displays a list of notifications
- Two separate root divs (root and root-notifications)

**Key Features:**

- Dynamic year in footer using `getFullYear()`
- Conditional footer text using `getFooterCopy()`
- Notifications component with border and padding

**Files:**

- `task_1/dashboard/src/utils.js`
- `task_1/dashboard/src/App.js`
- `task_1/dashboard/src/Notifications.js`
- `task_1/dashboard/src/Notifications.css`
- `task_1/dashboard/src/index.js`

### Task 2: Modify the App & Notifications

**Directory:** `task_2/dashboard/`

Add form elements and enhance notifications:

- Email and password input fields with labels
- OK button
- Close button in Notifications with click handler
- Unordered list with three notification items
- Data attributes for priority (default/urgent)
- `getLatestNotification()` using dangerouslySetInnerHTML

**Files:**

- `task_2/dashboard/src/App.js`
- `task_2/dashboard/src/utils.js`
- `task_2/dashboard/src/Notifications.js`
- `task_2/dashboard/src/Notifications.css`

### Task 3: Create basic tests

**Directory:** `task_3/dashboard/`

Add comprehensive test suites:

- Test utilities (getFullYear, getFooterCopy, getLatestNotification)
- Test App component (renders without crashing, contains correct divs)
- Test Notifications component (renders without crashing, contains 3 list items, displays text)
- Configure Enzyme adapter for React testing

**Setup:**

```bash
npm install
npm test
```

**Expected Test Results:**

```
Test Suites: 3 passed, 3 total
Tests: 11 passed, 11 total
```

**Files:**

- `task_3/dashboard/src/utils.test.js`
- `task_3/dashboard/src/App.test.js`
- `task_3/dashboard/src/Notifications.test.js`
- `task_3/dashboard/src/setupTests.js`

### Task 4: Deploy to GitHub Pages

**Directory:** `task_4/`

Deploy the React application to GitHub Pages:

- Configure gh-pages package
- Add deploy scripts to package.json
- Set homepage field for GitHub Pages

**Deployment:**

```bash
npm install
npm run deploy
```

**Files:**

- `task_4/package.json` (with gh-pages configuration)

### Task 5: Create project using Webpack

**Directory:** `task_5/dashboard/`

Build a React application from scratch using Webpack and Babel:

**Features:**

- Custom Webpack configuration with:
  - Babel loader for JS/JSX files
  - Style loader and CSS loader
  - Image webpack loader
  - HTML webpack plugin
  - Clean webpack plugin
  - Dev server with hot reloading
  - Inline source maps
- Babel presets for env and React
- Organized folder structure:
  - `src/App/` - App component files
  - `src/Notifications/` - Notifications component files
  - `src/utils/` - Utility functions
  - `src/assets/` - Images and static files
  - `config/` - Webpack and test configuration
  - `dist/` - Distribution folder with index.html

**Setup:**

```bash
cd task_5/dashboard
npm install
```

**Development:**

```bash
npm start          # Start dev server on port 8564
npm run build      # Production build
npm run build-dev  # Development build
npm test          # Run tests
```

**Files:**

- `task_5/dashboard/config/webpack.config.js`
- `task_5/dashboard/config/setupTests.js`
- `task_5/dashboard/.babelrc`
- `task_5/dashboard/package.json`
- `task_5/dashboard/dist/index.html`
- `task_5/dashboard/src/index.js`
- `task_5/dashboard/src/App/App.js`
- `task_5/dashboard/src/App/App.css`
- `task_5/dashboard/src/App/App.test.js`
- `task_5/dashboard/src/Notifications/Notifications.js`
- `task_5/dashboard/src/Notifications/Notifications.css`
- `task_5/dashboard/src/Notifications/Notifications.test.js`
- `task_5/dashboard/src/utils/utils.js`
- `task_5/dashboard/src/utils/utils.test.js`
- `task_5/dashboard/src/assets/` (favicon.ico, holberton-logo.jpg, close-icon.png)

## Installation

For each task directory containing a package.json:

```bash
cd task_X/dashboard
npm install
```

## Running the Applications

**Using create-react-app (tasks 0-4):**

```bash
npm start
```

**Using Webpack (task 5):**

```bash
npm start  # Starts on localhost:8564
```

## Testing

Run tests with:

```bash
npm test
```

## Dependencies

**Production:**

- React 16.14.0+ or 19.2.4 (depending on task)
- React DOM

**Development:**

- create-react-app (tasks 0-4)
- Webpack 5.x (task 5)
- Babel 7.x
- Enzyme 3.x
- enzyme-adapter-react-16
- Jest (testing framework)
- Various webpack loaders and plugins

## Project Structure

```
react_intro/
├── task_0/
│   └── dashboards/
│       ├── public/
│       └── src/
├── task_1/
│   └── dashboard/
│       ├── public/
│       └── src/
├── task_2/
│   └── dashboard/
│       ├── public/
│       └── src/
├── task_3/
│   └── dashboard/
│       ├── public/
│       └── src/
├── task_4/
│   └── (GitHub Pages deployment)
└── task_5/
    └── dashboard/
        ├── config/
        ├── dist/
        └── src/
            ├── App/
            ├── Notifications/
            ├── utils/
            └── assets/
```

## Author

Holberton School ALU Program

## License

ISC
