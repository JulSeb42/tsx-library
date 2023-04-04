/*=============================================== PageLoading types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { AllColorsTypes } from "../../types"
import type { LoaderVariantTypes } from "../Loader/types"

export interface PageLoadingProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    backgroundColor?: AllColorsTypes
    loaderColor?: AllColorsTypes
    loaderVariant?: LoaderVariantTypes
    loaderBorder?: number
    loaderSize?: number
    stopScrolling?: boolean
}
