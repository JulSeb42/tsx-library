/*=============================================== Loader ===============================================*/

import React from "react"

import VariantOne from "./templates/VariantOne"
import VariantTwo from "./templates/VariantTwo"
import VariantThree from "./templates/VariantThree"
import VariantFour from "./templates/VariantFour"

import { LoaderProps, LoaderVariantsTypes } from "./types"

const renderComponent = (props: any, variant?: LoaderVariantsTypes) => {
    switch (variant) {
        case 1:
            return <VariantOne {...props} />
        case 2:
            return <VariantTwo {...props} />
        case 3:
            return <VariantThree {...props} />
        case 4:
            return <VariantFour {...props} />
        default:
            return <VariantOne {...props} />
    }
}

const Loader = ({ variant, ...props }: LoaderProps) =>
    renderComponent(props, variant)

export default Loader
