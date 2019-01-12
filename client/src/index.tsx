import './scss/index.scss'
import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { routes } from './routes'
import { RootView } from './Views/RootView'

const App: React.SFC = () => (
    <BrowserRouter>
        <Route
            path={routes.index}
            component={RootView}
        />
    </BrowserRouter>
)

const rootElement = document.getElementById('react-root')

ReactDOM.render(<App />, rootElement)
