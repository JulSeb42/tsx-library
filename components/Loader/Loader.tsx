/*=============================================== Loader component ===============================================*/

import React from "react"

import LoaderOne from "./templates/LoaderOne"
import LoaderTwo from "./templates/LoaderTwo"
import LoaderThree from "./templates/LoaderThree"
import LoaderFour from "./templates/LoaderFour"

import { LoaderProps, LoaderVariantTypes } from "./types"

const renderComponent = (props: any, variant?: LoaderVariantTypes) => {
    switch (variant) {
        case 2:
            return <LoaderTwo {...props} />
        case 3:
            return <LoaderThree {...props} />
        case 4:
            return <LoaderFour {...props} />
        default:
            return <LoaderOne {...props} />
    }
}

const Loader = ({ variant, ...rest }: LoaderProps) =>
    renderComponent(rest, variant)

export default Loader
