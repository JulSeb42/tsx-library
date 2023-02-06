/*=============================================== PageLoading types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../types"
import { LoaderVariantTypes } from "../Loader/types"

export interface PageLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    backgroundColor?: AllColorsTypes
    loaderColor?: AllColorsTypes
    loaderVariant?: LoaderVariantTypes
    stopScrolling?: boolean
}
