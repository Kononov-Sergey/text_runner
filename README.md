# Описание проекта

### Cтек

- React
- Typescript
- Module CSS
- Redux, Redux toolkit
- Google fonts and icons

### Функционал

1. Ввод и начало отсчёта времени начинается **после печати первой буквы**.
2. Ввод символов отображается в **реальном времени**.

   - Есть **два режима** ввода (настраивается кнопкой в виде backspace). **Первый** не позволит допустить ошибку и написать неправильную букву , также нет возможности удалять или изменять напечатанное. **Второй** позволит это сделать и подсветит красным каждую неправильную букву.

3. Над набираемым текстом **есть промежуточные результаты ввода** (слова в минуту, символы в минуту, процент правильно напечатанных символов). **Данные обновляются каждый раз когда вы напечатаете отображаемую строку** и также **в конце выведется окно с конечным результатом печати всего текста**.
4. Также для удобства **можно скрыть или раскрыть клавиатуру** с подсвеченными клавишами для более быстрого и удобного обучения

### Что можно улучшить

1. Небольшие визуальные баги (дёргание) при вводе символов в строку.
2. Есть несколько мест, которые можно отрефакторить в более красивый и понятный код.
3. Многое не оптимизировано, но я не углублялся в эту тему, поэтому оставил всё, как есть.
4. Можно добавить ещё больше подсказок для обучения (отображение вводимых клавишь на виртуальной клавиатуре, картинку с пальцами и клавишами, на которые каждый палец должен нажимать и тд)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
