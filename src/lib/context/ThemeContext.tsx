/*=============================================== useDarkMode ===============================================*/

import React, { useState, createContext, useEffect } from "react"

import { ThemeLight, ThemeDark } from "../Variables"
import type { ThemeContextProps } from "../types"

const ThemeContext = createContext<ThemeContextProps | null>(null)

interface Props {
    children?: any
}

const ThemeProviderWrapper = ({ children }: Props) => {
    const [selectedTheme, setSelectedTheme] = useState<any>(undefined)
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
        if (typeof window !== "undefined") {
            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches &&
                !selectedTheme
            ) {
                setSelectedTheme("dark")
                setTheme(ThemeDark)
            } else if (localStorage.getItem("theme") === "dark") {
                setSelectedTheme("dark")
                setTheme(ThemeDark)
            } else if (localStorage.getItem("theme") === "light") {
                setSelectedTheme("light")
                setTheme(ThemeLight)
            }

            selectedTheme === "dark"
                ? body.classList.add("dark")
                : body.classList.remove("dark")
        }
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
