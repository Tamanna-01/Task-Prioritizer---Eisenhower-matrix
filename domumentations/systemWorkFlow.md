# FocusGrid - System Workflow Document

**Project Name:** FocusGrid – Smart Task Prioritization Using the Eisenhower Matrix

**Version:** 1.0

**Document Type:** System Workflow Documentation

---

# Table of Contents

1. Introduction
2. Purpose
3. Overall System Workflow
4. Component Interaction Workflow
5. Task Creation Workflow
6. Task Editing Workflow
7. Task Deletion Workflow
8. Drag-and-Drop Workflow
9. Download Board Workflow
10. State Management Workflow
11. Data Flow Diagram (DFD)
12. Sequence Diagrams
13. Activity Diagrams
14. Error Handling Workflow
15. Workflow Summary

---

# 1. Introduction

This document describes the internal workflow of the FocusGrid application. It explains how different components interact, how user actions are processed, and how data flows throughout the system.

Unlike the User Flow Document, which focuses on the user's journey, this document illustrates the application's internal processes and logic.

---

# 2. Purpose

The objectives of this document are to:

- Explain system operations.
- Describe component communication.
- Illustrate application workflows.
- Document internal state changes.
- Assist developers in maintenance and future enhancements.
- Provide a reference for testing and debugging.

---

# 3. Overall System Workflow

The complete workflow of the application is shown below.

```text
                     User
                       │
                       ▼
               User Interface
                       │
                       ▼
               React Components
                       │
                       ▼
               Event Handlers
                       │
                       ▼
               Update React State
                       │
                       ▼
              Automatic Re-render
                       │
                       ▼
                Updated Interface
```

The application follows React's unidirectional data flow, where state changes trigger automatic UI updates.

---

# 4. Component Interaction Workflow

The application is built using modular React components.

```text
                  App.tsx
                     │
     ┌───────────────┼──────────────────┐
     ▼               ▼                  ▼
 InputBar     StickyNotesList      MatrixBoard
     │               │                  │
     └───────────────┼──────────────────┘
                     │
                 StickyNote
                     │
                     ▼
             DragOverlayNote
```

### Component Responsibilities

| Component       | Responsibility                                                         |
| --------------- | ---------------------------------------------------------------------- |
| App             | Global state management and event coordination                         |
| InputBar        | Creates new tasks                                                      |
| StickyNotesList | Displays uncategorized tasks                                           |
| StickyNote      | Displays individual tasks and supports editing, deleting, and dragging |
| MatrixBoard     | Displays the four Eisenhower quadrants                                 |
| Quadrant        | Acts as a drop target and renders categorized tasks                    |
| DragOverlayNote | Displays a custom drag preview                                         |

---

# 5. Task Creation Workflow

When a user creates a new task, the following sequence occurs:

```text
User enters task
        │
        ▼
Click "Add Task"
        │
        ▼
Validate Input
        │
        ▼
Input Empty?
   │           │
 Yes          No
   │           │
Ignore      Create Note Object
                │
                ▼
Update notes State
                │
                ▼
React Re-render
                │
                ▼
Task Appears in Inbox
```

### Workflow Description

1. The user enters task text.
2. The system validates the input.
3. Empty inputs are ignored.
4. A new task object is created with a unique identifier.
5. The task is added to the global state.
6. React automatically updates the interface.

---

# 6. Task Editing Workflow

```text
Select Task
      │
      ▼
Click Edit
      │
      ▼
Enable Edit Mode
      │
      ▼
Modify Text
      │
      ▼
Save Changes
      │
      ▼
Update notes State
      │
      ▼
React Re-render
```

The edited task immediately replaces the previous version without refreshing the page.

---

# 7. Task Deletion Workflow

```text
Select Task
      │
      ▼
Click Delete
      │
      ▼
Remove Task
      │
      ▼
Update notes State
      │
      ▼
React Re-render
```

The task is permanently removed from the application state.

---

# 8. Drag-and-Drop Workflow

FocusGrid uses the **@dnd-kit** library to manage drag-and-drop interactions.

```text
User Starts Dragging
         │
         ▼
Detect Active Task
         │
         ▼
Display Drag Overlay
         │
         ▼
Move Across Quadrants
         │
         ▼
Detect Drop Target
         │
         ▼
Update Quadrant
         │
         ▼
Update React State
         │
         ▼
Re-render Board
```

### Internal Process

- `onDragStart()` stores the active task.
- The drag overlay provides visual feedback.
- `onDragEnd()` determines the destination quadrant.
- The task's quadrant value is updated.
- React automatically refreshes the matrix.

---

# 9. Download Board Workflow

The application allows users to export the current board as a PNG image.

```text
Click Download
        │
        ▼
Check Task Availability
        │
        ▼
Board Empty?
   │            │
 Yes           No
   │            │
Show Toast   Capture Matrix
                 │
                 ▼
Generate PNG
                 │
                 ▼
Trigger Browser Download
```

### Internal Steps

1. Verify that at least one task exists.
2. If no tasks are available, display an error notification.
3. Capture the matrix using `html-to-image`.
4. Convert the DOM into a PNG.
5. Trigger the browser's download mechanism.

---

# 10. State Management Workflow

FocusGrid uses React Hooks for state management.

```text
User Action
      │
      ▼
Event Handler
      │
      ▼
Update State
      │
      ▼
Virtual DOM
      │
      ▼
Diff Algorithm
      │
      ▼
DOM Update
```

### Primary State Variables

| State        | Purpose                                 |
| ------------ | --------------------------------------- |
| `notes`      | Stores all task information             |
| `activeNote` | Stores the task currently being dragged |
| `matrixRef`  | References the board for PNG export     |

---

# 11. Data Flow Diagram (DFD)

### Level 0 DFD

```text
             +------------------+
             |      User        |
             +------------------+
                     │
                     ▼
              +----------------+
              |   FocusGrid    |
              +----------------+
                     │
         ┌───────────┼───────────┐
         ▼           ▼           ▼
   Manage Tasks  Organize Tasks  Download Board
```

### Level 1 DFD

```text
User
 │
 ▼
InputBar
 │
 ▼
notes State
 │
 ├────────► Inbox
 │
 └────────► Matrix
                 │
                 ▼
          Download Module
```

---

# 12. Sequence Diagrams

## Task Creation Sequence

```text
User
 │
 │ Create Task
 ▼
InputBar
 │
 │ onCreate()
 ▼
App
 │
 │ Update notes
 ▼
React
 │
 │ Re-render
 ▼
Inbox
```

---

## Drag-and-Drop Sequence

```text
User
 │
 │ Drag Task
 ▼
StickyNote
 │
 ▼
dnd-kit
 │
 ▼
App
 │
 ▼
MatrixBoard
 │
 ▼
Quadrant Updated
```

---

## Download Sequence

```text
User
 │
 ▼
Download Button
 │
 ▼
App
 │
 ▼
Check notes
 │
 ▼
html-to-image
 │
 ▼
PNG Generated
 │
 ▼
Browser Download
```

---

# 13. Activity Diagrams

## Main Activity

```text
Start
 │
 ▼
Create Task
 │
 ▼
Task Created
 │
 ▼
Categorize Task
 │
 ▼
Edit/Delete?
 │
 ├────► Yes
 │        │
 │        ▼
 │   Update Task
 │
 ▼
Download Board
 │
 ▼
End
```

---

# 14. Error Handling Workflow

### Empty Task Input

```text
Input Empty?
     │
     ▼
Ignore Request
```

### Empty Board Download

```text
Download
     │
     ▼
No Tasks?
     │
     ▼
Display Toast
```

### Invalid Drop Target

```text
Drag Ends
      │
      ▼
Valid Quadrant?
      │
 ┌────┴────┐
 │         │
No        Yes
 │         │
Return   Update Task
```

---

# 15. Workflow Summary

| User Action    | System Response                       |
| -------------- | ------------------------------------- |
| Add Task       | Creates task and updates Inbox        |
| Edit Task      | Updates task content and refreshes UI |
| Delete Task    | Removes task from state               |
| Drag Task      | Updates task category and matrix      |
| Download Board | Generates and downloads PNG           |
| Invalid Input  | Ignores empty tasks                   |
| Empty Download | Displays an error notification        |

---

# Conclusion

The FocusGrid system follows a modular, event-driven architecture built on React's component model and unidirectional data flow. Each user interaction—whether creating, editing, deleting, moving, or exporting tasks—is handled through dedicated event handlers that update the application's state. React's automatic re-rendering ensures the interface remains synchronized with the underlying data, providing immediate feedback without requiring page refreshes.

The use of modular components, centralized state management, and well-defined workflows makes the application maintainable, scalable, and straightforward to extend with future capabilities such as persistent storage, user authentication, collaboration features, or cloud synchronization. This workflow design supports both efficient operation and ease of maintenance, making FocusGrid suitable for continued development and real-world productivity use.
