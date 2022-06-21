import { ApolloProvider } from '@apollo/client'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { client } from 'apollo/client'
import App from 'app/App'
import { LinearProgress } from 'components'

import './index.css'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Suspense fallback={<LinearProgress className="fixed top-0 left-0" />}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Suspense>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
