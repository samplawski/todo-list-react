# To-do list in React

This is a simple task list management application that allows users to add, remove, and mark tasks as completed. This project is a refactoring of an original Vanilla JavaScript application into a modern React application.

You can try the application at this [link](https://samplawski.github.io/todo-list-react/).

<img src="./public/screenshot.jpg" width="70%" alt="to-do list in React screenshot">

## Table of Contents

1. Short Description
2. Features
3. Technologies Used
4. Installationa nd Running Locally
5. How to Use
6. Status and Contributions
7. Contact

## 1. Short Description

Task List is a simple task management application built using React and modern JavaScript. The application focuses on effective state management to allow users to add tasks, remove tasks, and toggle the completion status of existing items.

## 2. Features

- Add tasks to the list
- Remove tasks from the list
- Mark tasks as completed
- Filter tasks (hide completed tasks)
- Intuitive user interface
- Responsive design that works on desktop and mobile devices
- Links in the footer to:
  - GitHub repository of the project
  - Contact the creator via email

## 3. Technologies Used

The application was built using the following technologies:

- React (bootstrapped with Create React App)
- React Hooks (primarily useState for state management)
- JSX
- CSS (for styling)
- Babel and Webpack (as part of the React configuration)

The application utilizes a functional component (App.js) as the State Owner. All application logic (the tasks array and the hideDone state) is managed using React Hooks. Data and handler functions (setters) are passed down to presentation components (like TasksList and Buttons) via props.

## 4. Installation

To run the application locally, follow these steps:

- Clone the repository to your local device using the command:
 git clone https://github.com/samplawski/todo-list-react.git
- Navigate to the project directory using the command: cd todo-list-react
- install all dependencies (node.js packages): npm install
- Open the application in your web browser: npm start

The application will launch and open automatically in your browser at http://localhost:3000 (or a similar address).

## 5. How to Use

1. Visit the Task List application website.
2. Add tasks to the list using the input field and the "Dodaj zadanie" (Add Task) button.
3. Tasks will be displayed on the tasks list.
4. To mark a task as completed, click on the green checkbox next to the task.
5. To remove a task from the list, click on the red "Bin" button next to the task.
6. Use the control buttons above the list to manage task visibility.

## 6. Status and Contributions

The project was created by Tomasz Sampławski and is still in build. This is a refactorisation of the original Vanilla JS application to the React environment. All interactions (adding, removing, filtering, and toggling completion status) are fully functional. Future plans include adding Local Storage support for data persistence. Contributions are welcome and appreciated! You can use it in your own projects or customize it to your needs.

## 7. Contact

If you wish to contact me, you can email me at tsamplawski@gmail.com.


## How to get started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
