/*=============================================== FullBleed component ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { FullBleedProps } from "./types"

const FullBleed = ({
    children,
    padding,
    height,
    aspectRatio,
    as,
    paddingLeftRight,
    paddingTopBottom,
    ...props
}: FullBleedProps) => {
    return (
        <Styles.StyledFullBleed
            $padding={typeof padding !== "object" ? padding : 0}
            $paddingLeft={typeof padding === "object" ? padding.left : 0}
            $paddingTop={typeof padding === "object" ? padding.top : 0}
            $paddingRight={typeof padding === "object" ? padding.right : 0}
            $paddingBottom={typeof padding === "object" ? padding.bottom : 0}
            $height={height}
            $aspectRatio={aspectRatio}
            $paddingLeftRight={paddingLeftRight}
            $paddingTopBottom={paddingTopBottom}
            as={as}
            {...props}
        >
            {children}
        </Styles.StyledFullBleed>
    )
}

export default FullBleed
