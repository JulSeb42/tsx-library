/*=============================================== Image types ===============================================*/

import { ObjectFitTypes } from "../../utils/common-types"

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    width?: number | string
    height?: number | string

    options?: {
        fit?: ObjectFitTypes
        caption?:
            | string
            | {
                  text: string
                  background: "black" | "white"
              }
    }
}
