/*=============================================== Variables loader ===============================================*/

import { stringifyPx } from "../../"

export const variablesLoaderFour = (size: number | null) => {
    return {
        ["--loader-size" as any]: size && stringifyPx(size),
    }
}

export const variablesAllLoaders = (
    size: number | null,
    borderWidth: number | null
) => {
    return {
        ...variablesLoaderFour(size),
        ["--loader-border-width" as any]:
            borderWidth && stringifyPx(borderWidth),
    }
}
