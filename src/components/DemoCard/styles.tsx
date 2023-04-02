/*=============================================== DemoCard styles ===============================================*/

import styled, { css } from "styled-components"

import { Spacers } from "../../lib"

import BaseCard from "../BaseCard"

export const StyledDemoCard = styled(BaseCard)`
    flex-direction: column;
    gap: ${Spacers.XXS};
`

const squareSize = 100

export const Square = styled.span<{
    $shadow?: string
    $spacer?: string
    $radius?: string
}>`
    width: ${squareSize}px;
    height: ${squareSize}px;

    ${({ $shadow, theme }) =>
        $shadow &&
        css`
            background-color: ${theme.Background};
            box-shadow: ${$shadow};
        `}

    ${({ $radius, theme }) =>
        $radius &&
        css`
            background-color: ${theme.Danger100};
            border-radius: ${$radius};
            width: ${$radius === "var(--radius-round)" && "150px"};
        `}

    ${({ $spacer, theme }) =>
        $spacer &&
        css`
            width: ${$spacer};
            height: ${$spacer};
            background-color: ${theme.Danger100};
        `}
`

export const Content = styled.div``
