/*=============================================== Get Aside position ===============================================*/

import type { AsidePositionTypes } from "./types"

export const getAsidePosition = (position: AsidePositionTypes) => {
    switch (position) {
        case 2:
            return 3
        case 3:
            return 4
        default:
            return 2
    }
}
