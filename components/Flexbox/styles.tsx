/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import Mixins from "../../Mixins"

import {
    SpacersTypes,
    FlexDirectionTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
} from "../../utils/common-types"

const StyledFlexbox = styled.div<{
    $inline?: boolean
    $flexDirection?: FlexDirectionTypes
    $flexWrap?: FlexWrapTypes
    $alignContent?: FlexAlignContentTypes
    $justifyContent?: FlexJustifyContentTypes
    $alignItems?: FlexAlignItemsTypes
    $justifyItems?: FlexJustifyItemsTypes
    $gap?: SpacersTypes | number | string
    $rowGap?: SpacersTypes | number | string
    $columnGap?: SpacersTypes | number | string
    $padding?: SpacersTypes | number | string
}>`
    ${Mixins.Flexbox};
`

export { StyledFlexbox }
