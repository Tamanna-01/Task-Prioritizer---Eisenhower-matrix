# FocusGrid – Technical Design Document

## Table of Contents

1. Introduction
2. Project Overview
3. Objectives
4. Functional Requirements
5. Non-Functional Requirements
6. System Architecture
7. Technology Stack
8. Project Structure
9. Component Architecture
10. Data Model
11. Application Workflow
12. Drag-and-Drop Architecture
13. State Management
14. Download Module
15. Responsive Design
16. Performance Optimizations
17. Security Considerations
18. Scalability
19. Future Enhancements
20. Conclusion

---

# 1. Introduction

## 1.1 Purpose

FocusGrid is a modern web-based task prioritization application based on the Eisenhower Matrix framework. It enables users to efficiently organize daily tasks by classifying them into four priority quadrants based on urgency and importance.

Unlike conventional to-do applications, FocusGrid emphasizes decision making instead of simple task listing, allowing users to visually prioritize work while maintaining a distraction-free interface.

The application has been developed using React, TypeScript, and Vite with an emphasis on performance, responsiveness, and intuitive user experience.

---

## 1.2 Scope

The system provides the following capabilities:

- Create new tasks
- Edit existing tasks
- Delete tasks
- Drag and drop tasks between quadrants
- Visual task prioritization
- Download the board as a PNG image
- Responsive interface for desktop and tablet devices

The application operates entirely on the client side without requiring any backend server or database.

---

# 2. Project Overview

## Project Name

**FocusGrid**

## Project Type

Single Page Application (SPA)

## Category

Productivity and Task Management

## Development Framework

React 19 with TypeScript

## Build Tool

Vite

---

# 3. Objectives

The primary objectives of FocusGrid are:

- Simplify daily task management.
- Encourage prioritization using the Eisenhower Matrix.
- Reduce cognitive overload through a clean interface.
- Provide intuitive drag-and-drop interaction.
- Allow users to export their planning board.
- Deliver a modern user experience inspired by contemporary productivity software.

---

# 4. Functional Requirements

### FR-01

The system shall allow users to create a new task.

---

### FR-02

The system shall display newly created tasks inside the Inbox section.

---

### FR-03

The system shall allow users to edit task descriptions.

---

### FR-04

The system shall allow users to delete tasks.

---

### FR-05

The system shall support drag-and-drop movement of tasks.

---

### FR-06

The system shall classify tasks into four predefined quadrants:

- Urgent & Important
- Not Urgent & Important
- Urgent & Not Important
- Not Urgent & Not Important

---

### FR-07

The system shall export the current matrix as a PNG image.

---

### FR-08

The system shall prevent downloading when the board is empty.

---

### FR-09

The system shall display toast notifications for user feedback.

---

### FR-10

The system shall support responsive layouts.

---

# 5. Non-Functional Requirements

| Requirement     | Description                    |
| --------------- | ------------------------------ |
| Performance     | UI updates within milliseconds |
| Scalability     | Component-based architecture   |
| Maintainability | Modular React components       |
| Usability       | Minimal learning curve         |
| Accessibility   | Keyboard support (Enter key)   |
| Reliability     | Client-side state consistency  |
| Compatibility   | Modern browsers                |
| Responsiveness  | Desktop and tablet support     |

---

# 6. System Architecture

```
                    User
                      │
                      ▼
                React Frontend
                      │
     ┌────────────────┼─────────────────┐
     ▼                ▼                 ▼
 InputBar      StickyNotesList     MatrixBoard
     │                │                 │
     └────────────────┼─────────────────┘
                      │
                  App State
                      │
                      ▼
             Drag & Drop Engine
                 (@dnd-kit)
                      │
                      ▼
               Download Module
             (html-to-image)
```

---

# 7. Technology Stack

| Layer           | Technology      |
| --------------- | --------------- |
| Frontend        | React 19        |
| Language        | TypeScript      |
| Styling         | CSS3            |
| Build Tool      | Vite            |
| Icons           | Lucide React    |
| Drag & Drop     | @dnd-kit        |
| Image Export    | html-to-image   |
| Notifications   | react-hot-toast |
| Package Manager | npm             |

---

# 8. Project Structure

```
src/

components/
│
├── InputBar
├── StickyNote
├── StickyNotesList
├── MatrixBoard
├── Quadrant
└── DragOverlayNote

types/
│
└── Note.ts

App.tsx
App.css
main.tsx
index.css
```

---

# 9. Component Architecture

## App

Responsibilities

- Global state management
- Event handling
- Drag-and-drop configuration
- Download functionality
- Component orchestration

---

## InputBar

Responsibilities

- Task creation
- Keyboard shortcuts
- Input validation

---

## StickyNotesList

Responsibilities

- Display unassigned tasks
- Render task cards

---

## StickyNote

Responsibilities

- Edit tasks
- Delete tasks
- Drag source

---

## MatrixBoard

Responsibilities

- Render four quadrants
- Organize tasks

---

## Quadrant

Responsibilities

- Drop target
- Display quadrant-specific tasks

---

## DragOverlayNote

Responsibilities

- Custom drag preview

---

# 10. Data Model

```typescript
interface Note {
  id: string;

  text: string;

  color: string;

  quadrant:
    | "none"
    | "urgent-important"
    | "noturgent-important"
    | "urgent-notimportant"
    | "noturgent-notimportant";
}
```

---

# 11. Application Workflow

```
User creates task
        │
        ▼
Task stored in state
        │
        ▼
Shown in Inbox
        │
        ▼
User drags task
        │
        ▼
Quadrant updated
        │
        ▼
Board re-renders
        │
        ▼
Optional Download
```

---

# 12. Drag-and-Drop Architecture

The application uses **@dnd-kit**.

Workflow:

1. User starts dragging
2. Active note stored
3. Drag overlay displayed
4. Drop target detected
5. Quadrant updated
6. React state updated
7. UI automatically re-renders

---

# 13. State Management

The application uses React Hooks.

Primary state variables include:

```typescript
notes;
```

Stores all tasks.

```typescript
activeNote;
```

Stores the currently dragged task.

```typescript
matrixRef;
```

Reference used for PNG export.

---

# 14. Download Module

The download module uses **html-to-image**.

Workflow:

```
Download Button
        │
        ▼
Check Board Empty
        │
        ▼
Convert Matrix
        │
        ▼
Generate PNG
        │
        ▼
Download
```

---

# 15. Responsive Design

Responsive techniques include:

- CSS Grid
- Flexbox
- Media Queries
- Glassmorphism
- Fluid typography

---

# 16. Performance Optimizations

- Component modularization
- Efficient React rendering
- Lightweight state management
- No unnecessary API calls
- Client-side rendering
- High-resolution export only when requested

---

# 17. Security Considerations

Although the application is client-side only, the following practices are implemented:

- Input validation
- No execution of user-provided HTML
- No external API dependency
- Browser-native file download
- No user data transmission

---

# 18. Scalability

The architecture supports future enhancements such as:

- Backend integration
- Authentication
- Cloud synchronization
- Categories and tags
- Deadlines
- Recurring tasks
- Team collaboration
- Offline support

---

# 19. Future Enhancements

- User accounts
- Cloud storage
- Dark/Light themes
- Calendar integration
- Notifications
- AI-assisted task prioritization
- Analytics dashboard
- Mobile application

---

# 20. Conclusion

FocusGrid demonstrates a modern, component-based approach to task management by combining the Eisenhower Matrix methodology with a responsive and intuitive React application. The modular architecture, drag-and-drop interaction, and export functionality provide a scalable foundation for future productivity features while maintaining a clean and user-friendly experience.

---
