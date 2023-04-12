/*=============================================== AutocompletePage ===============================================*/

import { useState } from "react"
import type { FormEvent } from "react"

import { Page } from "../../components"
import { Autocomplete, Form, Text } from "../../lib"
import { frenchCities } from "../../data"

const AutocompletePage = () => {
    const [location, setLocation] = useState("")
    const [results, setResults] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setResults(location)
    }

    return (
        <Page title="Autocomplete">
            <Form buttonPrimary="Submit" onSubmit={handleSubmit}>
                <Autocomplete
                    id="autocomplete"
                    items={frenchCities}
                    value={location}
                    setValue={setLocation}
                    placeholder="Search"
                    icon="search"
                    label="Label"
                    helper="Helper"
                    helperBottom="Helper bottom"
                    // variant="pill"
                    // fuzzy={false}
                />
            </Form>

            {results && results?.length && <Text>Result: {results}</Text>}
        </Page>
    )
}

export default AutocompletePage
