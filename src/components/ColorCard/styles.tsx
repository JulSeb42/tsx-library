/*=============================================== ColorCard styles ===============================================*/

import styled from "styled-components"

import { Radiuses, Mixins } from "../../lib"
import BaseCard from "../BaseCard"

export const StyledColorCard = styled(BaseCard)``

const squareSize = 150

export const Square = styled.span<{ $background: string }>`
    width: ${squareSize}px;
    height: ${squareSize}px;
    background-color: ${({ $background }) => $background};
    border-radius: ${Radiuses.S};
`

export const Content = styled.div`
    ${Mixins.Grid({
        $gap: "xxs",
    })};
`
