/*=============================================== InputCounterPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { InputCounter } from "../../lib"

const InputCounterPage = () => {
    const [counter, setCounter] = useState(1)

    return (
        <Page title="InputCounter">
            <InputCounter
                id="counter"
                value={counter}
                setValue={setCounter}
                min={1}
                max={30}
                step={10}
                label="Count"
            />
        </Page>
    )
}

export default InputCounterPage
