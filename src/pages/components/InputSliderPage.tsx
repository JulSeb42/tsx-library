/*=============================================== InputSliderPage ===============================================*/

import { useState } from "react"
import type { ChangeEvent } from "react"

import { Page } from "../../components"
import { InputSlider, Text } from "../../lib"

const InputSliderPage = () => {
    const [value, setValue] = useState<number>(50)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setValue(parseFloat(e.target.value))

    return (
        <Page title="InputSlider">
            <InputSlider
                value={value}
                onChange={handleChange}
                showMinMax
                label="Range"
            />
            <Text>{value}</Text>
        </Page>
    )
}

export default InputSliderPage
