/*=============================================== Flexbox component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { FlexboxProps } from "./types"

const Flexbox = forwardRef(
    (
        {
            as,
            inline,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            justifyItems,
            alignContent,
            gap,
            columnGap,
            rowGap,
            padding,
            children,
            ...rest
        }: FlexboxProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledFlexbox
            ref={ref}
            as={as}
            $inline={inline}
            $flexDirection={flexDirection}
            $flexWrap={flexWrap}
            $justifyContent={justifyContent}
            $alignItems={alignItems}
            $justifyItems={justifyItems}
            $alignContent={alignContent}
            $gap={gap}
            $columnGap={columnGap}
            $rowGap={rowGap}
            $padding={padding}
            {...rest}
        >
            {children}
        </Styles.StyledFlexbox>
    )
)

export default Flexbox
