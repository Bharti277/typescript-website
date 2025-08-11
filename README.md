# TypeScript Todo Application

A modern, responsive Todo application built with React, TypeScript, and Vite. Features persistent storage, filtering capabilities, and a clean user interface.

## 🚀 Features

- **Type-safe Development** with TypeScript
- **Fast Development** powered by Vite
- **State Management** using React Context API
- **Persistent Storage** using localStorage
- **Responsive Design** with SCSS
- **Route-based Filtering** for todos
- **CRUD Operations:**
  - Create new todos
  - Read existing todos
  - Update todo text
  - Delete todos
  - Toggle todo completion status

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- SCSS
- Context API for state management

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd typescript-wesite
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm run lint` - Runs ESLint
- `npm run preview` - Previews production build locally

## 📁 Project Structure

```
src/
├── components/
│   ├── AddTodo.tsx
│   └── TodosList.tsx
├── store/
│   ├── todos.tsx
│   ├── todosContext.tsx
│   └── types.ts
├── styles/
│   └── main.scss
├── App.tsx
└── main.tsx
```

## 🎨 Features & Implementation

### Todo Management

- Add new todos
- Edit existing todos via popup modal
- Delete todos
- Toggle todo completion status
- Persistent storage using localStorage

### Filtering

- View all todos
- Filter active todos
- Filter completed todos

### Styling

- Responsive design
- Modern UI with smooth animations
- Custom checkbox design
- Modal popups for editing
