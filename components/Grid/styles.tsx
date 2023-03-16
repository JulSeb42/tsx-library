/*=============================================== Grid styles ===============================================*/

import styled, { css } from "styled-components"

import { Mixins, Breakpoints } from "../../"
import {
    SpacersTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
    PaddingTypes,
} from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledGrid = styled.div<{
    $inline?: boolean
    $col?: number | string
    $gap?: SpacersTypes
    $columnGap?: SpacersTypes
    $rowGap?: SpacersTypes
    $justifyItems?: GridJustifyItemsTypes
    $alignItems?: GridAlignItemsTypes
    $justifyContent?: GridJustifyContentTypes
    $alignContent?: GridAlignContentTypes
    $padding?: PaddingTypes
    $colTablet?: string
    $colMobile?: string
}>`
    ${Mixins.Grid};

    @media ${Breakpoints.Tablet} {
        grid-template-columns: ${({ $col }) =>
            $col && typeof $col === "number" && $col >= 6
                ? "repeat(4, 1fr)"
                : $col === 4 || $col === 5
                ? "repeat(3, 1fr)"
                : `repeat(${$col}, 1fr)`};
    }

    @media ${Breakpoints.Mobile} {
        grid-template-columns: ${({ $col }) =>
            $col && typeof $col === "number" && $col >= 6
                ? "repeat(2, 1fr)"
                : "repeat(1, 1fr)"};
    }

    ${({ $col, $colTablet, $colMobile }) =>
        typeof $col === "number"
            ? css`
                  @media ${Breakpoints.Tablet} {
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

                  @media ${Breakpoints.Mobile} {
                      grid-template-columns: repeat(
                          ${!$col ? 1 : $col >= 6 ? 2 : 1},
                          1fr
                      );
                  }
              `
            : css`
                  @media ${Breakpoints.Tablet} {
                      grid-template-columns: ${$colTablet};
                  }

                  @media ${Breakpoints.Mobile} {
                      grid-template-columns: ${$colMobile};
                  }
              `}
`

setDefaultTheme([StyledGrid])

export { StyledGrid }
