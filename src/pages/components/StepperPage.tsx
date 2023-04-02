/*=============================================== StepperPage ===============================================*/

import { Page } from "../../components"
import { Stepper } from "../../lib"
import type { StepProps } from "../../lib/types"

const StepperPage = () => {
    const steps: StepProps[] = [
        {
            text: "Step",
            href: "#",
        },
        {
            text: "Step",
            href: "#",
        },
        {
            text: "Step",
        },
        {
            text: "Step",
        },
        {
            text: "Step",
        },
    ]

    return (
        <Page title="Stepper">
            <Stepper
                steps={steps}
                iconActive="check-circle"
                accentColor="secondary"
            />

            <Stepper steps={steps} active={2} direction="column" />
        </Page>
    )
}

export default StepperPage
