import * as React from "react"
import {render} from "react-dom"
import { Provider } from "react-redux"
import { hot } from "react-hot-loader"

import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"

import { createHashHistory } from "history"
import { RouterContainer } from "./Router"
import { CruxReducerFactory } from "react-crux"

import "./assets/scss/App.scss"
import { DefaultModels } from "./DefaultModels"

const rootEl = document.getElementById("main")

const appReducer = combineReducers({crux: CruxReducerFactory(DefaultModels)})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}
const store = createStore(rootReducer, /* preloadedState, */ composeWithDevTools(
    applyMiddleware(thunk, createLogger())
))

const App = hot(module)(() => <Provider store={store}>
    <RouterContainer />
</Provider>)

render(
    <App/>,
    rootEl
)

