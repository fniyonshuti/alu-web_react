# Task 3: React Developer Tools Screenshots - Step-by-Step Guide

## 📋 Overview

Task 3 requires you to use React Developer Tools to:

1. **Screenshot 1**: Change a component's prop and show the visual change (red urgent notification)
2. **Screenshot 2**: Use the Profiler to show component load times

---

## 🔧 Prerequisites

### Step 1: Install React Developer Tools

**For Chrome:**

1. Open Chrome browser
2. Go to: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
3. Click "Add to Chrome"
4. Click "Add extension"

**For Firefox:**

1. Open Firefox browser
2. Go to: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
3. Click "Add to Firefox"
4. Click "Add"

**For Edge:**

1. Open Edge browser
2. Go to: https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil
3. Click "Get"
4. Click "Add extension"

---

## 🚀 Step-by-Step Instructions

### Part 1: Setting Up the Environment

#### 1. Navigate to Task 2 Dashboard

```bash
cd "c:\Users\LENOVO\Desktop\fred\web development\alu-web_react\react_props\task_2\dashboard"
```

#### 2. Install Dependencies (if not already done)

```bash
npm install
```

#### 3. Start the Development Server

```bash
npm start
```

**Expected output:**

```
Compiled successfully!

You can now view dashboard in the browser.

  Local:            http://localhost:8080
```

The app should automatically open in your browser at http://localhost:8080.

---

### Part 2: Screenshot 1 - Component Property Change

This screenshot shows how changing a prop affects the component's appearance.

#### Step 1: Open React DevTools

1. In your browser with the app open, press **F12** (or right-click → "Inspect")
2. Look for the **"Components"** tab (React icon)
   - If you don't see it, look for >> and click it to see more tabs
3. Click on the **Components** tab

#### Step 2: Navigate to NotificationItem

In the Components tree on the left:

1. Expand `<App>`
2. Expand `<Notifications>`
3. You'll see three `<NotificationItem>` components
4. Click on the **first** `<NotificationItem>`

#### Step 3: View Current Props

In the right panel, you'll see:

```
props
  type: "default"
  value: "New course available"
```

The notification should appear in normal color (not red).

#### Step 4: Change the Prop

1. In the right panel, find `type: "default"`
2. Double-click on **"default"**
3. Change it to **"urgent"**
4. Press **Enter**

#### Step 5: Observe the Change

- The notification should now turn **red** (urgent styling)
- This demonstrates how props affect component rendering

#### Step 6: Take Screenshot 1

1. Make sure both the **app view** and **React DevTools** are visible
2. You should see:
   - Left side: Components tree with NotificationItem selected
   - Right side: Props showing `type: "urgent"`
   - Browser: The first notification is now RED
3. Take a screenshot (Windows: **Win + Shift + S**, Mac: **Cmd + Shift + 4**)
4. Save as: `change_property.png`

**What your screenshot should show:**

- ✅ React DevTools Components tab open
- ✅ First NotificationItem selected in the tree
- ✅ Props panel showing `type: "urgent"`
- ✅ The notification appearing RED in the browser

---

### Part 3: Screenshot 2 - Profiler

This screenshot shows component rendering performance.

#### Step 1: Switch to Profiler Tab

1. In DevTools, click the **"Profiler"** tab (next to Components)
2. You'll see a blue circle (Record button)

#### Step 2: Start Profiling

1. Click the **blue circle** to start recording
2. The circle should turn red, indicating recording is active

#### Step 3: Trigger a Re-render

Choose one of these methods:

**Method A: Reload the Page**

- Press **Ctrl + R** (Windows) or **Cmd + R** (Mac)
- This will re-render all components

**Method B: Interact with the App** (if available)

- Click on any interactive elements
- This triggers component updates

#### Step 4: Stop Profiling

1. Click the **red circle** again to stop recording
2. The Profiler will show rendering data

#### Step 5: View the Profiling Data

You should now see:

- **Flamegraph** or **Ranked** chart
- Component names (App, Header, Footer, Login, Notifications, NotificationItem)
- **Render duration** for each component (in milliseconds)
- Color-coded performance (gray = fast, yellow = medium, red = slow)

#### Step 6: Take Screenshot 2

1. Make sure the Profiler shows clear data
2. You should see:
   - Profiler tab selected
   - Flamegraph or Ranked view showing components
   - Render times for each component
   - Component hierarchy
3. Take a screenshot (Windows: **Win + Shift + S**, Mac: **Cmd + Shift + 4**)
4. Save as: `profiler.png`

**What your screenshot should show:**

- ✅ React DevTools Profiler tab open
- ✅ Flamegraph or Ranked chart visible
- ✅ Component names listed (App, Header, Footer, Login, Notifications)
- ✅ Render duration times visible
- ✅ Color-coded performance indicators

---

### Part 4: Save Screenshots

#### Step 1: Create task_3 Directory

```bash
# Go back to react_props directory
cd "c:\Users\LENOVO\Desktop\fred\web development\alu-web_react\react_props"

# Create task_3 directory
mkdir task_3
```

#### Step 2: Move Screenshots

Move your two screenshots to the task_3 folder:

- `change_property.png` → `react_props/task_3/change_property.png`
- `profiler.png` → `react_props/task_3/profiler.png`

#### Step 3: Verify

```bash
ls task_3/
```

**Expected output:**

```
change_property.png
profiler.png
```

---

## 📸 Screenshot Examples & Tips

### For Screenshot 1 (change_property.png):

**Good Screenshot Checklist:**

- [ ] React DevTools is visible
- [ ] Components tab is selected
- [ ] NotificationItem is highlighted in component tree
- [ ] Props panel shows `type: "urgent"`
- [ ] Browser shows the notification in RED color
- [ ] Screenshot is clear and readable

**Common Issues:**

- ❌ Can't see the red notification → Make sure you changed type to "urgent"
- ❌ DevTools not showing → Press F12 or try Ctrl + Shift + I
- ❌ No Components tab → Make sure React DevTools extension is installed

### For Screenshot 2 (profiler.png):

**Good Screenshot Checklist:**

- [ ] Profiler tab is selected
- [ ] Recording has been stopped (showing data)
- [ ] Component render times are visible
- [ ] Component hierarchy is clear
- [ ] Chart/graph is complete and readable

**Common Issues:**

- ❌ No data showing → Make sure you clicked record, reloaded page, then stopped recording
- ❌ Empty profiler → Reload the page while recording is active
- ❌ Can't see component names → Try switching between Flamegraph and Ranked views

---

## 🎯 Alternative: Using Task 4 or Task 5

If Task 2 has issues, you can use Task 4 or Task 5 instead (they have more components):

```bash
# For Task 4
cd "c:\Users\LENOVO\Desktop\fred\web development\alu-web_react\react_props\task_4\dashboard"
npm install
npm start
```

```bash
# For Task 5 (recommended - most complete)
cd "c:\Users\LENOVO\Desktop\fred\web development\alu-web_react\react_props\task_5\dashboard"
npm install
npm start
```

Task 5 has more components to profile (CourseList, CourseListRow, etc.), which makes for better profiler screenshots.

---

## 🔍 Troubleshooting

### Issue: npm start fails with "command not found"

**Solution:**

```bash
npm install
npm start
```

### Issue: Port 8080 already in use

**Solution:**

```bash
# Kill existing process
# Windows:
netstat -ano | findstr :8080
taskkill /PID <PID_NUMBER> /F

# Then try again
npm start
```

### Issue: React DevTools shows "This page is using the development build of React"

**This is GOOD!** It means React DevTools can see your React app. Continue with the steps.

### Issue: Can't find Components tab

**Solution:**

1. Make sure React DevTools extension is installed
2. Reload the page (Ctrl + R)
3. Close and reopen DevTools (F12)
4. Look for a >> button in the tabs bar (might be hidden)

### Issue: Screenshot is too large/small

**Solution:**

- Windows: Use Snipping Tool (Win + Shift + S) and select specific area
- Mac: Use Cmd + Shift + 4 and drag to select area
- Or use browser zoom (Ctrl + / Ctrl -)

---

## ✅ Completion Checklist

- [ ] React Developer Tools extension installed
- [ ] App running at http://localhost:8080
- [ ] React DevTools opened (F12 → Components tab)
- [ ] Screenshot 1: NotificationItem type changed to "urgent" (red)
- [ ] Screenshot 2: Profiler showing component render times
- [ ] Both screenshots saved in `task_3/` folder
- [ ] Screenshots are clear and show required information

---

## 📚 Additional Resources

**React DevTools Documentation:**

- https://react.dev/learn/react-developer-tools

**Video Tutorials:**

- Search YouTube for "React Developer Tools tutorial"
- Look for videos covering Components tab and Profiler

**What Each Tab Does:**

- **⚛️ Components**: Inspect React component tree, view/edit props and state
- **⚛️ Profiler**: Measure rendering performance, identify slow components

---

## 🎉 Expected Results

When you're done, your `task_3` folder should contain:

```
react_props/task_3/
├── change_property.png    (~100-500 KB)
└── profiler.png           (~100-500 KB)
```

Both screenshots should clearly demonstrate your understanding of:

1. How props affect component rendering (change_property.png)
2. How to use the Profiler to analyze performance (profiler.png)

---

**Good luck! 🚀**

If you run into any issues, check the Troubleshooting section above.
