/*=============================================== PageLoading types ===============================================*/

import React from "react"

import { LoaderVariantsTypes } from "../Loader/types"
import { AllColorsTypes } from "../../utils/common-types"

export interface PageLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor?: AllColorsTypes
    loaderColor?: AllColorsTypes
    loaderVariant?: LoaderVariantsTypes
}
