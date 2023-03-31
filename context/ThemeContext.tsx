/*=============================================== useDarkMode ===============================================*/

import { useState, createContext, useEffect } from "react"

import { ThemeLight, ThemeDark } from "../Variables"
import type { ThemeContextProps } from "../types"

const ThemeContext = createContext<ThemeContextProps | null>(null)

interface Props {
    children?: any
}

const ThemeProviderWrapper = ({ children }: Props) => {
    const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">(
        "light"
    )
    const [theme, setTheme] = useState(
        selectedTheme === "dark" ? ThemeDark : ThemeLight
    )

    const toggleTheme = () => {
        if (selectedTheme === "light") {
            setSelectedTheme("dark")
            setTheme(ThemeDark)

            if (typeof window !== "undefined") {
                localStorage.setItem("theme", "dark")
                document.body.classList.add("dark")
            }
        } else {
            setSelectedTheme("light")
            setTheme(ThemeLight)

            if (typeof window !== "undefined") {
                localStorage.setItem("theme", "light")
                document.body.classList.remove("dark")
            }
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
                document.body.classList.add("dark")
            } else if (localStorage.getItem("theme") === "dark") {
                setSelectedTheme("dark")
                setTheme(ThemeDark)
                document.body.classList.add("dark")
            } else if (localStorage.getItem("theme") === "light") {
                setSelectedTheme("light")
                setTheme(ThemeLight)
                document.body.classList.remove("dark")
            }
        }
    }, [selectedTheme])

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
