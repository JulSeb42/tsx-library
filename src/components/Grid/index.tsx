// Imports
import styled, { css } from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { props } from "./types"

const Grid = styled.div<props>`
    display: ${({ inline }) => (inline ? "inline-grid" : "grid")};
    grid-template-columns: ${({ col }) =>
        typeof col === "number" ? `repeat(${col}, 1fr)` : col};
    grid-template-rows: ${({ rows }) => rows};
    grid-template-areas: ${({ areas }) => areas};
    ${({ gap }) => Mixins.Gap({ gap: gap })};
    justify-items: ${({ justifyItems }) => justifyItems};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-content: ${({ alignContent }) => alignContent};
    padding: ${({ padding }) => (padding ? stringifyPx(padding) : 0)};

    ${({ col, colTablet, colMobile }) =>
        typeof col === "number"
            ? css`
                  @media ${Variables.Breakpoints.Tablet} {
                      grid-template-columns: repeat(
                          ${!col
                              ? 1
                              : col >= 6
                              ? 4
                              : col === 4 || col === 5
                              ? 3
                              : col === 3 || col === 2
                              ? 2
                              : 1},
                          1fr
                      );
                  }

                  @media ${Variables.Breakpoints.Mobile} {
                      grid-template-columns: repeat(
                          ${!col ? 1 : col >= 6 ? 2 : 1},
                          1fr
                      );
                  }
              `
            : css`
                  @media ${Variables.Breakpoints.Tablet} {
                      grid-template-columns: ${colTablet};
                  }

                  @media ${Variables.Breakpoints.Mobile} {
                      grid-template-columns: ${colMobile};
                  }
              `}
`

export default Grid
