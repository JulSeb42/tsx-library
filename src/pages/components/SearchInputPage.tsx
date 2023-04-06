/*=============================================== InputPage ===============================================*/

import { useState } from "react"
import type { ChangeEvent } from "react"

import { Page } from "../../components"
import { Input } from "../../lib"

const SearchInputPage = () => {
    const [search, setSearch] = useState("Search")
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)
    const clearSearch = () => setSearch("")

    return (
        <Page title="Input">
            <Input
                id="input-search"
                type="search"
                value={search}
                onChange={handleSearch}
                clearSearch={clearSearch}
                focusKeys={["Command", "KeyK"]}
                showKeys
                accentColor="secondary"
                label="Search"
            />
        </Page>
    )
}

export default SearchInputPage
