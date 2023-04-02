/*=============================================== NavDemo component ===============================================*/

import React, { useContext, useState } from "react"
import type { ChangeEvent } from "react"

import { ThemeContext, uuid, Button, Input, unslugify } from "../../lib"
import type { ThemeContextProps } from "../../lib/types"

import { router } from "../../routes/routes"

import * as Styles from "./styles"

const NavDemo = () => {
    const { toggleTheme } = useContext(ThemeContext) as ThemeContextProps

    const [search, setSearch] = useState("")
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)

    const results = router.filter(route =>
        route.path.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Styles.StyledNavDemo>
            <Input
                value={search}
                onChange={handleSearch}
                placeholder="Search"
                type="search"
                clearSearch={() => setSearch("")}
                backgroundColor="light"
            />

            <Button onClick={toggleTheme} variant="text" color="white">
                Toggle theme
            </Button>

            {results.map(route => (
                <Styles.StyledNavLink to={route.path} key={uuid()}>
                    {route.path === "/"
                        ? "Home"
                        : // @ts-ignore
                          unslugify(route.path.replaceAll("/", ""))}
                </Styles.StyledNavLink>
            ))}
        </Styles.StyledNavDemo>
    )
}

export default NavDemo
