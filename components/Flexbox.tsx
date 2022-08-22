/*=============================================== Flexbox ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Mixins from "./Mixins"

import {
    SpacerTypes,
    FlexDirectionTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
} from "../common-types"

/*==================== Component ====================*/

const Flexbox = ({
    inline,
    flexDirection,
    flexWrap,
    justifyContent,
    alignContent,
    justifyItems,
    alignItems,
    gap,
    rowGap,
    columnGap,
    padding,
    children,
    ...props
}: Props) => (
    <StyledFlexbox
        $inline={inline}
        $flexDirection={flexDirection}
        $flexWrap={flexWrap}
        $justifyContent={justifyContent}
        $alignContent={alignContent}
        $justifyItems={justifyItems}
        $alignItems={alignItems}
        $gap={gap}
        $rowGap={rowGap}
        $columnGap={columnGap}
        $padding={padding}
        {...props}
    >
        {children}
    </StyledFlexbox>
)

export default Flexbox

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    flexDirection?: FlexDirectionTypes
    flexWrap?: FlexWrapTypes
    alignContent?: FlexAlignContentTypes
    justifyContent?: FlexJustifyContentTypes
    alignItems?: FlexAlignItemsTypes
    justifyItems?: FlexJustifyItemsTypes
    gap?: SpacerTypes | number | string
    rowGap?: SpacerTypes | number | string
    columnGap?: SpacerTypes | number | string
    padding?: SpacerTypes | number | string
}

/*==================== Styles ====================*/

const StyledFlexbox = styled.div<{
    $inline?: boolean
    $flexDirection?: FlexDirectionTypes
    $flexWrap?: FlexWrapTypes
    $alignContent?: FlexAlignContentTypes
    $justifyContent?: FlexJustifyContentTypes
    $alignItems?: FlexAlignItemsTypes
    $justifyItems?: FlexJustifyItemsTypes
    $gap?: SpacerTypes | number | string
    $rowGap?: SpacerTypes | number | string
    $columnGap?: SpacerTypes | number | string
    $padding?: SpacerTypes | number | string
}>`
    ${Mixins.Flexbox};
`
