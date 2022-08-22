/*=============================================== Grid ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "../Variables"
import Mixins from "./Mixins"

import {
    SpacerTypes,
    GridJustifyItemsTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridAlignContentTypes,
} from "../common-types"

/*==================== Component ====================*/

const Grid = ({
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
    ...props
}: Props) => (
    <StyledGrid
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
        {...props}
    >
        {children}
    </StyledGrid>
)

export default Grid

/*==================== Types ====================*/

const col = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
} as const

type colType = keyof typeof col

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    col?: colType | number | string
    gap?: SpacerTypes | number | string
    columnGap?: SpacerTypes | number | string
    rowGap?: SpacerTypes | number | string
    justifyItems?: GridJustifyItemsTypes
    alignItems?: GridAlignItemsTypes
    justifyContent?: GridJustifyContentTypes
    alignContent?: GridAlignContentTypes
    padding?: SpacerTypes | number | string
    colTablet?: string
    colMobile?: string
}

/*==================== Styles ====================*/

const StyledGrid = styled.div<{
    $inline?: boolean
    $col?: colType | number | string
    $gap?: SpacerTypes | number | string
    $columnGap?: SpacerTypes | number | string
    $rowGap?: SpacerTypes | number | string
    $justifyItems?: GridJustifyItemsTypes
    $alignItems?: GridAlignItemsTypes
    $justifyContent?: GridJustifyContentTypes
    $alignContent?: GridAlignContentTypes
    $padding?: SpacerTypes | number | string
    $colTablet?: string
    $colMobile?: string
}>`
    ${Mixins.Grid};

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: ${({ $col }) =>
            $col && $col >= 6
                ? "repeat(4, 1fr)"
                : $col === 4 || $col === 5
                ? "repeat(3, 1fr)"
                : "repeat(2, 1fr)"};
    }

    @media ${Variables.Breakpoints.Mobile} {
        grid-template-columns: ${({ $col }) =>
            $col && $col >= 6 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
    }

    ${({ $col, $colTablet, $colMobile }) =>
        typeof $col === "number"
            ? css`
                  @media ${Variables.Breakpoints.Tablet} {
                      grid-template-columns: repeat(
                          ${!$col
                              ? 1
                              : $col >= 6
                              ? 4
                              : $col === 4 || $col === 5
                              ? 3
                              : $col === 3 || $col === 2
                              ? 2
                              : 1},
                          1fr
                      );
                  }

                  @media ${Variables.Breakpoints.Mobile} {
                      grid-template-columns: repeat(
                          ${!$col ? 1 : $col >= 6 ? 2 : 1},
                          1fr
                      );
                  }
              `
            : css`
                  @media ${Variables.Breakpoints.Tablet} {
                      grid-template-columns: ${$colTablet};
                  }

                  @media ${Variables.Breakpoints.Mobile} {
                      grid-template-columns: ${$colMobile};
                  }
              `}
`
