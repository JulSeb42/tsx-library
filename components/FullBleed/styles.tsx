/*=============================================== FullBleed styles ===============================================*/

import styled, { css } from "styled-components"

import { Mixins, stringifyPx } from "../../"
import type { PaddingTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledFullBleed = styled.div<{
    $height?: number | string
    $aspectRatio?: string
    $padding?: PaddingTypes
}>`
    grid-column: 1/4;
    ${Mixins.Padding};
    width: 100%;
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};

    ${({ $height }) =>
        $height &&
        css`
            height: ${stringifyPx($height)};

            img {
                height: 100%;
            }
        `}
`

setDefaultTheme([StyledFullBleed])

export { StyledFullBleed }
