/*=============================================== DatepickerPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { Datepicker, convertDateShort } from "../../lib"

const DatepickerPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <Page title="Datepicker">
            <Datepicker
                id="date"
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                minDate={new Date()}
                maxDate={new Date("2024-04-12")}
                label="Calendar"
            />

            {convertDateShort(selectedDate)}
        </Page>
    )
}

export default DatepickerPage
