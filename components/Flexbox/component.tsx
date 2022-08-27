/*=============================================== Flexbox ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { FlexboxProps } from "./types"

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
}: FlexboxProps) => (
    <Styles.StyledFlexbox
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
    </Styles.StyledFlexbox>
)

export default Flexbox
