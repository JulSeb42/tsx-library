/*=============================================== Grid styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import {
    SpacersTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
} from "../../utils/common-types"

import { ColType } from "./types"

const StyledGrid = styled.div<{
    $inline?: boolean
    $col?: ColType | number | string
    $gap?: SpacersTypes | number | string
    $columnGap?: SpacersTypes | number | string
    $rowGap?: SpacersTypes | number | string
    $justifyItems?: GridJustifyItemsTypes
    $alignItems?: GridAlignItemsTypes
    $justifyContent?: GridJustifyContentTypes
    $alignContent?: GridAlignContentTypes
    $padding?: SpacersTypes | number | string
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

export { StyledGrid }
