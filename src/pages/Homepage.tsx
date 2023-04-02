/*=============================================== Homepage ===============================================*/

import React, { useContext } from "react"

import { ThemeContext, Text } from "../lib"
import type { ThemeContextProps } from "../lib/types"

import { Page } from "../components"

const Homepage = () => {
    const { selectedTheme } = useContext(ThemeContext) as ThemeContextProps

    return (
        <Page title="Homepage">
            <Text>Theme: {selectedTheme}</Text>
        </Page>
    )
}

export default Homepage
