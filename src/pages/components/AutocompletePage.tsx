/*=============================================== AutocompletePage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { Autocomplete } from "../../lib"
import { frenchCities } from "../../data"

const AutocompletePage = () => {
    const [location, setLocation] = useState("")

    return (
        <Page title="Autocomplete">
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
        </Page>
    )
}

export default AutocompletePage
