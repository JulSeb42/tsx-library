/*=============================================== useDarkMode ===============================================*/

import React, { useState, createContext, useEffect } from "react"

import { ThemeLight, ThemeDark } from "../Variables"
import { ThemeContextProps } from "../utils/component-props"

const ThemeContext = createContext<ThemeContextProps | null>(null)

interface Props {
    children?: any
}

const ThemeProviderWrapper = ({ children }: Props) => {
    const [selectedTheme, setSelectedTheme] = useState<any>(localStorage.getItem("theme"))
    const [theme, setTheme] = useState(
        selectedTheme === "dark" ? ThemeDark : ThemeLight
    )

    const body = document.body

    const toggleTheme = () => {
        if (selectedTheme === "light") {
            setSelectedTheme("dark")
            localStorage.setItem("theme", "dark")
            setTheme(ThemeDark)
            body.classList.add("dark")
        } else {
            setSelectedTheme("light")
            localStorage.setItem("theme", "light")
            setTheme(ThemeLight)
            body.classList.remove("dark")
        }
    }

    useEffect(() => {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && !selectedTheme) {
            setSelectedTheme("dark")
            setTheme(ThemeDark)
        }
        
        selectedTheme === "dark"
            ? body.classList.add("dark")
            : body.classList.remove("dark")
    }, [body.classList, selectedTheme])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                selectedTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProviderWrapper, ThemeContext }
