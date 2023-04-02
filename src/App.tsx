/*=============================================== App ===============================================*/

import React, { useContext } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { ThemeContext, ThemeProvider } from "./lib"
import type { ThemeContextProps } from "./lib/types"

import { router } from "./routes/routes"
import { demos } from "./routes/demos"

const App = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextProps

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider
                router={createBrowserRouter([...router, ...demos])}
            />
        </ThemeProvider>
    )
}

export default App
