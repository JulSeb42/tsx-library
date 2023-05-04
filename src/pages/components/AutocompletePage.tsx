/*=============================================== AutocompletePage ===============================================*/

import { useState, useRef } from "react"
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

    const el = useRef<HTMLInputElement>(null)

    return (
        <Page title="Autocomplete">
            <button onClick={() => el?.current?.focus()}>Focus</button>

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
                    focusKeys={["Command", "KeyJ"]}
                    showKeys
                    ref={el}
                />
            </Form>

            {results && results?.length && <Text>Result: {results}</Text>}
        </Page>
    )
}

export default AutocompletePage
