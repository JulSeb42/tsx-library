/*=============================================== InputPhonePage ===============================================*/

import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"

import { Page } from "../../components"
import { InputPhone } from "../../lib"
import type { InputPhoneCountryType } from "../../lib/types"

const InputPhonePage = () => {
    const [selectedCountry, setSelectedCountry] = useState<
        InputPhoneCountryType | undefined
    >(undefined)

    const [phone, setPhone] = useState("")
    const [result, setResult] = useState("")
    const handlePhone = (e: ChangeEvent<HTMLInputElement>) =>
        setPhone(e.target.value)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResult(`${selectedCountry?.dial_code || "+33"}${phone}`)
    }

    return (
        <Page title="InputPhone">
            <form
                onSubmit={handleSubmit}
                style={{
                    width: 400,
                    display: "grid",
                    gap: 8,
                    // paddingTop: 400
                }}
            >
                <InputPhone
                    id="phone"
                    defaultCountry="fr"
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    value={phone}
                    onChange={handlePhone}
                    // variant="pill"
                    // listDirection="up"
                    // validation={{ status: "not-passed" }}
                    // backgroundColor="dark"
                    label="Phone number"
                />

                <button type="submit">Submit</button>
            </form>

            {result && <p>{result}</p>}
        </Page>
    )
}

export default InputPhonePage
