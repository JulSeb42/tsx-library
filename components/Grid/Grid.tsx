/*=============================================== Grid component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { GridProps } from "./types"

const Grid = forwardRef(
    (
        {
            as,
            inline,
            col,
            gap,
            columnGap,
            rowGap,
            justifyItems,
            alignItems,
            justifyContent,
            alignContent,
            padding,
            colTablet,
            colMobile,
            children,
            ...rest
        }: GridProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledGrid
            ref={ref}
            as={as}
            $inline={inline}
            $col={col}
            $gap={gap}
            $columnGap={columnGap}
            $rowGap={rowGap}
            $justifyItems={justifyItems}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
            $alignContent={alignContent}
            $padding={padding}
            $colTablet={colTablet}
            $colMobile={colMobile}
            {...rest}
        >
            {children}
        </Styles.StyledGrid>
    )
)

export default Grid
