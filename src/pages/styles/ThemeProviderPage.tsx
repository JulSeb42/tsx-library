/*=============================================== ThemeProviderPage ===============================================*/

import React, { useContext } from "react"

import { Page } from "../../components"
import { ThemeContext, Text, uuid } from "../../lib"
import type { ThemeContextProps } from "../../lib/types"

import { allColors } from "../../data"

const ThemeProviderPage = () => {
    const { selectedTheme, toggleTheme } = useContext(
        ThemeContext
    ) as ThemeContextProps

    const list = allColors.filter(
        color =>
            !color.css.includes(selectedTheme === "dark" ? "light" : "dark")
    )

    return (
        <Page title="Theme provider">
            <Text>Selected theme: {selectedTheme}</Text>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Text tag="ul">
                {list.map(color => (
                    <li key={uuid()}>{color.css}</li>
                ))}
            </Text>
        </Page>
    )
}

export default ThemeProviderPage
