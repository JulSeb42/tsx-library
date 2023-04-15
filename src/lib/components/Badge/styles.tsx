/*=============================================== Badge styles ===============================================*/

import styled from "styled-components"

import { FontWeights, Mixins, Radiuses } from "../../"
import type { ColorsShortTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const BaseBadge = styled.span`
    min-width: var(--badge-size, 16px);
    height: var(--badge-size, 16px);
    font-size: calc(var(--badge-size, 16px) * 0.7);
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    font-weight: ${FontWeights.Black};
    border-radius: ${Radiuses.Round};
`

const BadgeContent = styled(BaseBadge)<{
    $hasChildren?: boolean
    $childrenLength?: number
}>`
    ${({ $hasChildren, $childrenLength }) =>
        $hasChildren &&
        $childrenLength &&
        $childrenLength > 2 &&
        Mixins.Padding({
            $padding: {
                leftRight: "xs",
                topBottom: 0,
            },
        })};
`

const StyledBadge = styled(BadgeContent)<{
    $color?: ColorsShortTypes
}>`
    background-color: ${({ theme, $color }) => theme.AllColors({ $color })};
    color: ${({ $color }) => Mixins.FontColorBackgroundShort({ $color })};
`

setDefaultTheme([StyledBadge])

export { StyledBadge }
