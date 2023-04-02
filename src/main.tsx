/*=============================================== Main ===============================================*/

import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import { ThemeProviderWrapper } from "./lib"

import "./lib/index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProviderWrapper>
        <App />
    </ThemeProviderWrapper>
)
