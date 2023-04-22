/*=============================================== TimepickerPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { Timepicker } from "../../lib"
import type { TimepickerHoursTypes } from "../../lib/types"

const TimepickerPage = () => {
    const [selectedTime, setSelectedTime] =
        useState<TimepickerHoursTypes>("06:00")

    return (
        <Page title="Timepicker">
            <Timepicker
                id="picker-single"
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                helperBottom="Helper"
                icon="clock"
                step="1h"
                minTime="05:00"
                maxTime="16:00"
                // inputVariant="pill"
                // validation={{ status: "not-passed" }}
                // backgroundColor="light"
            />
        </Page>
    )
}

export default TimepickerPage
