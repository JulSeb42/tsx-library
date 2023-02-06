/*=============================================== Hr component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { HrProps } from "./types"

const Hr = forwardRef(
    (
        {
            as,
            width = "100%",
            height = 1,
            color = "gray-200",
            margin,
            ...rest
        }: HrProps,
        ref?: React.ForwardedRef<HTMLHRElement>
    ) => (
        <Styles.StyledHr
            ref={ref}
            as={as}
            $width={width}
            $height={height}
            $color={color}
            $margin={typeof margin !== "object" ? margin : undefined}
            $marginLeft={typeof margin === "object" ? margin.left : undefined}
            $marginTop={typeof margin === "object" ? margin.top : undefined}
            $marginRight={typeof margin === "object" ? margin.right : undefined}
            $marginBottom={
                typeof margin === "object" ? margin.bottom : undefined
            }
            {...rest}
        />
    )
)

export default Hr
