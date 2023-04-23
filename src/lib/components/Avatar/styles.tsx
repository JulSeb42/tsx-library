/*=============================================== Avatar styles ===============================================*/

import styled from "styled-components"

import { FontWeights, Mixins, Radiuses } from "../../"
import type { AllColorsTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const AVATAR_SIZE = "var(--avatar-size, 48px)"

const BaseAvatar = styled.span`
    width: ${AVATAR_SIZE};
    height: ${AVATAR_SIZE};
    border-radius: ${Radiuses.Circle};
    font-weight: ${FontWeights.Black};
    font-size: calc(${AVATAR_SIZE} * 0.7);
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    overflow: hidden;
    padding: 0;
`

const StyledAvatar = styled(BaseAvatar)<{
    $color?: AllColorsTypes
    $contentColor?: AllColorsTypes
}>`
    background-color: ${({ theme, $color }) => theme.AllColors({ $color })};
    color: ${({ $color, $contentColor, theme }) =>
        $contentColor
            ? theme.AllColors({
                  $color: $contentColor,
              })
            : $color === "white"
            ? theme.Primary500
            : $color === "black"
            ? theme.White
            : theme.Background};
`

setDefaultTheme([StyledAvatar])

export { StyledAvatar }
