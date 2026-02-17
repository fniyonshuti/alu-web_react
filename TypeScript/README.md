# TypeScript

This project contains TypeScript tasks demonstrating various TypeScript features and concepts.

## Tasks

### Task 0: Creating an interface for a student

- **Directory:** `task_0/`
- **File:** `js/main.ts`
- **Objective:** Create a Student interface and render a table using Vanilla JavaScript
- **Concepts:** TypeScript interfaces, basic types

### Task 1: Let's build a Teacher interface

- **Directory:** `task_1/`
- **File:** `js/main.ts`
- **Objective:** Create Teacher interface with readonly properties and allow dynamic attributes
- **Concepts:** Readonly properties, index signatures, interface extension

### Task 2: Extending the Teacher class

- **Directory:** `task_2/`
- **File:** `js/main.ts`
- **Objective:** Create Director and Teacher interfaces, implement createEmployee function with union types
- **Concepts:** Type predicates, union types, function overloading, type guards

### Task 3: Ambient Namespaces

- **Directory:** `task_3/`
- **Files:**
  - `js/interface.ts` - RowID and RowElement definitions
  - `js/crud.d.ts` - Ambient type declarations
  - `js/crud.js` - JavaScript implementation
  - `js/main.ts` - Main implementation using CRUD functions
- **Objective:** Create ambient type declarations for an external library
- **Concepts:** Triple slash directives, ambient declarations, module declarations

### Task 4: Namespace & Declaration Merging

- **Directory:** `task_4/`
- **Files:**
  - `js/subjects/Teacher.ts` - Teacher interface with firstName and lastName
  - `js/subjects/Subject.ts` - Subject class with teacher property
  - `js/subjects/Cpp.ts` - Cpp class extending Subject
  - `js/subjects/React.ts` - React class extending Subject
  - `js/subjects/Java.ts` - Java class extending Subject
  - `js/main.ts` - Main implementation testing subject classes
- **Objective:** Use namespace and declaration merging for modular code organization
- **Concepts:** Namespaces, declaration merging, class inheritance

### Task 5: Brand convention & Nominal typing

- **Directory:** `task_5/`
- **File:** `js/main.ts`
- **Objective:** Create MajorCredits and MinorCredits interfaces with brand properties
- **Concepts:** Nominal typing, brand properties, type safety

## Setup

Each task directory contains its own configuration files:

- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript compiler configuration
- `webpack.config.js` - Webpack bundler configuration

## Installation

Navigate to each task directory and run:

```bash
npm install
```

## Building

To compile TypeScript to JavaScript:

```bash
npm run build
```

## Development

For development with auto-recompilation:

```bash
npm start
```

Or:

```bash
npm run build-dev
```

## Dependencies

- **TypeScript:** 3.6.4
- **Webpack:** 4.41.2
- **ts-loader:** 7.0.4
- **fork-ts-checker-webpack-plugin:** 4.1.3
- **html-webpack-plugin:** 3.2.0
- **clean-webpack-plugin:** 2.0.2

## Learning Outcomes

After completing these tasks, you will understand:

- TypeScript interfaces and type annotations
- Readonly properties and optional properties
- Index signatures for dynamic properties
- Interface extension and inheritance
- Classes and access modifiers
- Union types and type guards
- Type predicates (is keyword)
- Ambient declarations for external libraries
- Triple slash directives
- Namespaces and declaration merging
- Nominal typing with brand properties
- TypeScript configuration and build tools
