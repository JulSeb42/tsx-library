/*=============================================== PageLoading types ===============================================*/

import React from "react"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

export interface PageLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    options?: {
        backgroundColor?: LibColorsTypes | ColorsShortTypes | string
        loaderColor?: LibColorsTypes | ColorsShortTypes | string
    }
}
