/*=============================================== Toast styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

const StyledToast = styled.div<{ $isClosed?: boolean }>`
    width: 100%;
    max-width: 400px;
    background-color: ${Variables.Colors.White};
    display: ${({ $isClosed }) => ($isClosed ? "none" : "grid")};
    gap: ${Variables.Spacers.XXS};
    box-shadow: ${Variables.Shadows.M};
    padding: ${Variables.Spacers.M};
    border-radius: ${Variables.Radiuses.M};
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
    border-radius: ${Variables.Radiuses.Circle};
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    background-color: transparent;
    transition: ${Variables.Transitions.Short};
    color: ${Variables.Colors.Primary500};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Gray50};
        }
    }
`

export { StyledToast, TitleContainer, Content, CloseButton }
