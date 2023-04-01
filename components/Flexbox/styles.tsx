/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import type {
    SpacersTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexDirectionTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
    PaddingTypes,
} from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledFlexbox = styled.div<{
    $inline?: boolean
    $flexDirection?: FlexDirectionTypes
    $flexWrap?: FlexWrapTypes
    $justifyContent?: FlexJustifyContentTypes
    $alignItems?: FlexAlignItemsTypes
    $justifyItems?: FlexJustifyItemsTypes
    $alignContent?: FlexAlignContentTypes
    $gap?: SpacersTypes
    $columnGap?: SpacersTypes
    $rowGap?: SpacersTypes
    $padding?: PaddingTypes
}>`
    ${Mixins.Flexbox};
`

setDefaultTheme([StyledFlexbox])

export { StyledFlexbox }
