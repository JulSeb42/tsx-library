/*=============================================== Get transition ===============================================*/

import { Transitions } from ".."
import type { TransitionTypes } from "../types"

export const variableTransition = (transition: TransitionTypes) => {
    switch (transition) {
        case "short":
            return Transitions.Short
        case "long":
            return Transitions.Long
        case "bezier":
            return Transitions.Bezier
    }
}
