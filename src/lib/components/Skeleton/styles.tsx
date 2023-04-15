/*=============================================== Skeleton styles ===============================================*/

import styled, { css, keyframes } from "styled-components"

import { Flexbox, Mixins } from "../../"
import type { AllColorsTypes, BorderTypes } from "../../types"
import type { SkeletonAnimationTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const Pulse = keyframes`
    0% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
`

const BaseSkeleton = styled.div`
    position: relative;
    overflow: hidden;
    width: var(--skeleton-width);
    height: var(--skeleton-height);
    flex: var(--skeleton-flex);
    flex-grow: var(--skeleton-flex-grow);
    ${Mixins.BorderRadiusVar};
`

const SkeletonBackground = styled(BaseSkeleton)<{
    $backgroundColor?: AllColorsTypes
}>`
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
`

const StyledSkeleton = styled(SkeletonBackground)<{
    $animation?: SkeletonAnimationTypes
}>`
    ${({ $animation }) =>
        $animation &&
        $animation === "pulse" &&
        css`
            animation: ${Pulse} 1000ms infinite alternate;
        `}
`

const ShineLoad = keyframes`
    from {
        left: -150px;
    }

    to {
        left: 106%;
    }
`

const Shine = styled.span`
    position: absolute;
    top: -200px;
    bottom: -200px;
    width: 100px;
    filter: blur(20px);
    transform: skew(-15deg);
    background-color: ${({ theme }) => theme.White};
    animation: ${ShineLoad} 2000ms infinite;
    opacity: 0.7;
`

const BaseCard = styled(Flexbox)`
    width: var(--skeleton-card-width);
    height: var(--skeleton-card-height);
    overflow: hidden;
    position: relative;
    ${Mixins.BorderRadiusVar()};
`

const CardBorder = styled(BaseCard)<{ $border?: BorderTypes }>`
    ${({ $border }) => $border && Mixins.Border({ $border })};
`

const Card = styled(CardBorder)<{
    $backgroundColor?: AllColorsTypes
}>`
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
`

setDefaultTheme([StyledSkeleton, Shine, Card])

export { StyledSkeleton, Shine, Card }
