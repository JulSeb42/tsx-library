/*=============================================== SelectPage ===============================================*/

import { useState } from "react"
import type { FormEvent } from "react"

import { Page } from "../../components"
import { Select } from "../../lib"

const SelectPage = () => {
    const items = ["react", "javascript", "scss", "css", "html"]

    const [selected, setSelected] = useState<string>(items[0])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(selected)
    }

    return (
        <Page title="Select">
            <form
                onSubmit={handleSubmit}
                style={{ display: "grid", gap: 8, width: 400 }}
            >
                <Select
                    id="select"
                    selected={selected}
                    setSelected={setSelected}
                    label="Select"
                    helperBottom="Helper"
                    items={items}
                    // inputVariant="pill"
                />

                <button type="submit">Submit</button>
            </form>

            <p>{selected}</p>
        </Page>
    )
}

export default SelectPage
