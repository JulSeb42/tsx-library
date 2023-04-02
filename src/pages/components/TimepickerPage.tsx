/*=============================================== TimepickerPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { Timepicker } from "../../lib"

const TimepickerPage = () => {
    const [selectedTime, setSelectedTime] = useState(6)

    return (
        <Page title="Timepicker">
            <Timepicker
                id="picker-single"
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                helperBottom="Helper"
                listVariant="shadow"
                listShadow="s"
                icon="clock"
                accentColor="secondary"
                // inputVariant="pill"
                // validation={{ status: "not-passed" }}
                // backgroundColor="light"
            />
        </Page>
    )
}

export default TimepickerPage
