import './scss/index.scss'
import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App: React.SFC = () => (
    <div>
        Here goes React
    </div>
)

const rootElement = document.getElementById('react-root')

ReactDOM.render(<App />, rootElement)
