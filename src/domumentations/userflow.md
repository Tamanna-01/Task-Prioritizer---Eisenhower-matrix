# FocusGrid - User Flow Document

**Project Name:** FocusGrid – Smart Task Prioritization Using the Eisenhower Matrix

**Version:** 1.0

**Document Type:** User Flow Documentation

---

# Table of Contents

1. Introduction
2. Purpose of User Flow
3. Target Users
4. User Personas
5. User Goals
6. User Journey
7. Application Navigation Flow
8. Primary User Flow
9. Alternative User Flows
10. Use Case Diagram
11. User Scenarios
12. User Journey Map
13. Screen Navigation
14. User Experience Principles
15. Conclusion

---

# 1. Introduction

A user flow represents the complete path a user follows while interacting with an application. It focuses on the user's decisions, actions, and outcomes rather than the technical implementation.

This document illustrates how users interact with FocusGrid from launching the application to successfully organizing and downloading their task board.

The goal is to ensure that every interaction is intuitive, efficient, and requires minimal learning effort.

---

# 2. Purpose of User Flow

The objectives of this document are:

- Understand how users interact with the application.
- Identify every decision point.
- Simplify navigation.
- Reduce user confusion.
- Improve usability.
- Ensure consistent user experience.

---

# 3. Target Users

FocusGrid is designed for users who need an effective method to organize and prioritize tasks.

Typical users include:

- Students managing assignments and deadlines
- Working professionals handling daily responsibilities
- Project managers organizing project tasks
- Researchers planning work schedules
- Freelancers managing multiple clients
- Individuals organizing personal goals

No technical knowledge is required.

---

# 4. User Personas

## Persona 1 – Student

**Name:** Alex

**Age:** 21

**Occupation:** University Student

### Goals

- Track assignments
- Prepare for examinations
- Complete projects on time

### Pain Points

- Too many assignments
- Doesn't know which task should be completed first
- Easily distracted

### How FocusGrid Helps

Visual prioritization helps Alex decide what deserves immediate attention.

---

## Persona 2 – Working Professional

**Name:** Sarah

**Age:** 30

**Occupation:** Software Engineer

### Goals

- Manage office work
- Organize meetings
- Track daily priorities

### Pain Points

- Constant context switching
- Large number of tasks
- Missed deadlines

### How FocusGrid Helps

The matrix separates urgent work from long-term planning, making daily planning easier.

---

# 5. User Goals

The primary goals of a FocusGrid user are:

- Quickly capture ideas
- Organize tasks
- Prioritize effectively
- Reduce mental overload
- Track important work
- Save the completed board

---

# 6. User Journey

The overall user journey is shown below.

```text
Start
  │
  ▼
Open FocusGrid
  │
  ▼
View Dashboard
  │
  ▼
Create Task
  │
  ▼
Task Appears in Inbox
  │
  ▼
Review Task
  │
  ▼
Decide Priority
  │
  ▼
Drag Task to Matrix
  │
  ▼
Repeat Until Inbox Empty
  │
  ▼
Review Board
  │
  ▼
Download Board
  │
  ▼
Finish
```

---

# 7. Application Navigation Flow

Unlike traditional applications, FocusGrid operates on a single-page interface.

```
Application

│

├── Hero Section

├── Quick Add

├── Inbox

└── Focus Matrix
        │
        ├── Do First
        ├── Schedule
        ├── Delegate
        └── Eliminate
```

The absence of multiple pages minimizes navigation complexity and keeps users focused.

---

# 8. Primary User Flow

## Step 1 – Open Application

The user opens FocusGrid.

↓

The dashboard is immediately visible.

---

## Step 2 – Enter Task

The user types a task into the Quick Add section.

↓

Clicks **Add Task**.

↓

Task appears inside Inbox.

---

## Step 3 – Review Task

The user considers:

- Is it urgent?
- Is it important?

---

## Step 4 – Categorize

The user drags the task into one of the four quadrants.

---

## Step 5 – Continue

Repeat until every task has been categorized.

---

## Step 6 – Save

The user downloads the completed board.

---

# 9. Alternative User Flows

## Editing a Task

```
Select Task

↓

Click Edit

↓

Modify Text

↓

Save Changes

↓

Updated Task Appears
```

---

## Deleting a Task

```
Select Task

↓

Click Delete

↓

Task Removed
```

---

## Moving Between Quadrants

```
Select Task

↓

Drag

↓

Drop Into Another Quadrant

↓

Board Updates
```

---

## Empty Download

```
Click Download

↓

Board Empty?

↓

Yes

↓

Show Error Notification

↓

Download Cancelled
```

---

# 10. Use Case Diagram

```text
                    +----------------+
                    |      User      |
                    +----------------+
                             |
     ----------------------------------------------------
     |          |          |          |        |         |
     ▼          ▼          ▼          ▼        ▼         ▼
 Add Task   Edit Task  Delete Task  Move Task Download  View Board
```

---

# 11. User Scenarios

## Scenario 1 – Daily Planning

Emily begins her workday by listing all pending tasks. She then categorizes each task based on urgency and importance before beginning work.

Outcome:

A clear visual plan for the day.

---

## Scenario 2 – Student Assignment Planning

John has several assignments due throughout the week. He organizes them using FocusGrid to identify which assignments require immediate attention and which can be scheduled later.

Outcome:

Reduced stress and improved time management.

---

## Scenario 3 – Team Meeting Preparation

A project manager creates meeting tasks and categorizes them before sharing the exported board with the team.

Outcome:

Better collaboration and planning.

---

# 12. User Journey Map

| Stage       | User Action        | User Feeling | System Response      |
| ----------- | ------------------ | ------------ | -------------------- |
| Open App    | Launch application | Curious      | Dashboard displayed  |
| Create Task | Add task           | Focused      | Task added to Inbox  |
| Review      | Evaluate priority  | Thinking     | Awaiting user action |
| Drag Task   | Categorize         | Productive   | Matrix updated       |
| Organize    | Repeat process     | Confident    | Live updates         |
| Download    | Save board         | Satisfied    | PNG downloaded       |

---

# 13. Screen Navigation

```
Dashboard

│

├── Quick Add
│       │
│       ▼
│   Create Task
│
├── Inbox
│       │
│       ├── Edit
│       ├── Delete
│       └── Drag
│
└── Matrix
        │
        ├── Do First
        ├── Schedule
        ├── Delegate
        └── Eliminate
                │
                ▼
          Download Board
```

---

# 14. User Experience Principles

The application follows several key UX principles:

### Simplicity

The interface presents only the controls required for task management, reducing cognitive load.

### Consistency

Buttons, typography, spacing, and interactions remain uniform throughout the application.

### Immediate Feedback

User actions such as adding, editing, moving, or downloading tasks produce immediate visual feedback.

### Learnability

Users can understand the application without prior training due to its intuitive layout and interaction patterns.

### Error Prevention

The application prevents invalid actions, such as downloading an empty board, by displaying a clear notification.

### Efficiency

Drag-and-drop interaction minimizes the number of clicks required to organize tasks.

---

# 15. Conclusion

The user flow of FocusGrid is designed to minimize complexity while maximizing usability. By guiding users through a simple sequence—creating tasks, prioritizing them, organizing them within the Eisenhower Matrix, and exporting the final board—the application supports efficient decision-making without overwhelming the user.

The single-page design, intuitive drag-and-drop interactions, and immediate visual feedback create a streamlined experience suitable for users of varying technical backgrounds. This user-centered flow ensures that task management remains focused, accessible, and productive.
