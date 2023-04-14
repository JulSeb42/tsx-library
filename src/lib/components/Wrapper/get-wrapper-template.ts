/*=============================================== Get wrapper template ===============================================*/

import { Layouts } from "../../"
import type { WrapperTemplateType } from "./types"

export const getWrapperTemplate = (template?: WrapperTemplateType) => {
    switch (template) {
        case "3cols":
            return Layouts.Wrapper.ThreeCols
        case "2cols":
            return Layouts.Wrapper.TwoCols
        default:
            return Layouts.Wrapper.OneCol
    }
}
