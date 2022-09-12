/*=============================================== Toast styles ===============================================*/

import styled from "styled-components"

import {
    Spacers,
    Shadows,
    Radiuses,
    Breakpoints,
    Transitions,
} from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledToast = styled.div<{ $isClosed?: boolean }>`
    width: 100%;
    max-width: 400px;
    background-color: ${({ theme }) => theme.Background};
    display: ${({ $isClosed }) => ($isClosed ? "none" : "grid")};
    gap: ${Spacers.XXS};
    box-shadow: ${Shadows.M};
    padding: ${Spacers.M};
    border-radius: ${Radiuses.M};
`

const TitleContainer = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "flex-start",
        $gap: "xs",
    })};

    h5 {
        flex-grow: 1;
    }
`

const Content = styled.div`
    ${Mixins.Grid({
        $gap: "xxs",
    })}
`

const buttonSize = 32

const CloseButton = styled.button`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Radiuses.Circle};
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    background-color: transparent;
    transition: ${Transitions.Short};
    color: ${({ theme }) => theme.Primary500};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ theme }) => theme.Gray50};
        }
    }
`

setDefaultTheme([StyledToast, TitleContainer, Content, CloseButton])

export { StyledToast, TitleContainer, Content, CloseButton }
