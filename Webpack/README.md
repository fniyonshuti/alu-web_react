# Webpack

This project contains Webpack tasks demonstrating webpack configuration, bundling, loaders, plugins, code splitting, and development servers.

## Learning Objectives

- How to setup Webpack for a basic project
- Entry points, output, and loaders
- How to add plugins
- How to split your code into chunks
- How to setup a dev server

## Requirements

- All code executed on Ubuntu 18.04 LTS using Node 12.x.x
- All files should end with a new line

## Tasks

### Task 0: Basic setup

**Directory:** `task_0/`

Create and run Webpack using a basic installation:

- Install webpack and webpack-cli as dev dependencies
- Install jQuery as a regular dependency
- Create src/index.js that uses jQuery to add three paragraphs to the page
- Create dist/index.html that imports main.js
- Use default webpack configuration (no custom config file)

**Setup:**

```bash
cd task_0
npm install
npx webpack
```

**Files:**

- `package.json` - Dependencies configuration
- `src/index.js` - Main JavaScript file
- `dist/index.html` - HTML file importing main.js

### Task 1: Learning how to use Webpack with a config file

**Directory:** `task_1/`

Configure Webpack with a custom config file:

- Install webpack, jQuery, and Lodash
- Add build script that runs webpack in production mode
- Create dashboard_main.js with debounced click counter
- Output bundle.js to public folder

**Features:**

- Button click counter with Lodash debounce
- Production mode webpack build
- Custom webpack.config.js

**Setup:**

```bash
cd task_1
npm install
npm run build
```

**Files:**

- `package.json` - Dependencies and build script
- `webpack.config.js` - Webpack configuration
- `js/dashboard_main.js` - Main JavaScript with debounce
- `public/index.html` - HTML file importing bundle.js

### Task 2: Adding CSS & Images

**Directory:** `task_2/`

Add CSS and image support to Webpack:

- Configure css-loader and style-loader
- Configure file-loader and image-webpack-loader
- Add logo div with background image
- Style counter to appear next to button in bold
- Optimize images to avoid size warnings

**Features:**

- CSS modules support
- Image optimization
- Logo background image (200x200px)
- Performance optimization to avoid webpack warnings

**Setup:**

```bash
cd task_2
npm install
npm run build
```

**Files:**

- `package.json` - Dependencies including loaders
- `webpack.config.js` - Config with CSS and image loaders
- `js/dashboard_main.js` - Main JavaScript importing CSS
- `css/main.css` - Styles for logo and counter
- `public/index.html` - HTML file
- `assets/holberton-logo.jpg` - Logo image

### Task 3: Dev servers, modules, and tree shaking

**Directory:** `task_3/`

Advanced Webpack configuration with development server and code splitting:

**Development Server:**

- Webpack dev server on port 8564
- Development mode with inline source maps
- Hot module replacement
- Auto-open browser with `npm run start-dev`

**Module Organization:**

- **header module:** Logo and title with console.log
- **body module:** Dashboard content and click counter
- **footer module:** Copyright text

**Optimization:**

- Three entry points (header, body, footer)
- Code splitting with shared chunks
- Clean build folder on each build
- HtmlWebpackPlugin for automatic HTML generation

**Setup:**

```bash
cd task_3
npm install
npm run build          # Production build
npm run start-dev      # Dev server
```

**Access:** http://localhost:8564/

**Files:**

- `package.json` - Dependencies and scripts
- `webpack.config.js` - Advanced config with splitChunks
- `modules/header/header.js` - Header module
- `modules/header/header.css` - Header styles
- `modules/body/body.js` - Body module with counter
- `modules/body/body.css` - Body styles
- `modules/footer/footer.js` - Footer module
- `modules/footer/footer.css` - Footer styles
- `assets/holberton-logo.jpg` - Logo image

## Installation

For each task:

```bash
cd task_X
npm install
```

## Running the Applications

**Task 0:**

```bash
npx webpack
# Open dist/index.html in browser
```

**Task 1 & 2:**

```bash
npm run build
# Open public/index.html in browser
```

**Task 3:**

```bash
npm run start-dev  # Opens browser automatically
# Or build for production:
npm run build
```

## Dependencies

**Common:**

- webpack: ^5.51.1
- webpack-cli: ^4.8.0
- jquery: ^3.6.0
- lodash: ^4.17.21

**Task 2 & 3 Additional:**

- css-loader: ^6.2.0
- style-loader: ^3.2.1
- file-loader: ^6.2.0
- image-webpack-loader: ^7.0.1

**Task 3 Additional:**

- webpack-dev-server: ^4.0.0
- html-webpack-plugin: ^5.3.2
- clean-webpack-plugin: ^4.0.0

## Project Structure

```
Webpack/
├── task_0/
│   ├── package.json
│   ├── src/
│   │   └── index.js
│   └── dist/
│       └── index.html
├── task_1/
│   ├── package.json
│   ├── webpack.config.js
│   ├── js/
│   │   └── dashboard_main.js
│   └── public/
│       └── index.html
├── task_2/
│   ├── package.json
│   ├── webpack.config.js
│   ├── js/
│   │   └── dashboard_main.js
│   ├── css/
│   │   └── main.css
│   ├── assets/
│   │   └── holberton-logo.jpg
│   └── public/
│       └── index.html
└── task_3/
    ├── package.json
    ├── webpack.config.js
    ├── modules/
    │   ├── header/
    │   │   ├── header.js
    │   │   └── header.css
    │   ├── body/
    │   │   ├── body.js
    │   │   └── body.css
    │   └── footer/
    │       ├── footer.js
    │       └── footer.css
    └── assets/
        └── holberton-logo.jpg
```

## Author

Holberton School ALU Program

## License

ISC
