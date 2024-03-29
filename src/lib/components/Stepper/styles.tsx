/*=============================================== Stepper styles ===============================================*/

import styled from "styled-components"

import { FontWeights, Mixins, Radiuses, Spacers } from "../../"

import { setDefaultTheme } from "../../utils"

const Item = styled.span`
    position: relative;
    z-index: 1;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xxs",
        $inline: true,
    })};
`

const StyledStepper = styled.div`
    position: relative;
    ${Mixins.Flexbox({
        $alignItems: "flex-start",
    })};

    &:before {
        content: "";
        position: absolute;
        left: 12px;
        top: 12px;
        background-color: ${({ theme }) =>
            theme.AllColors({ $color: "primary" })};
        z-index: 0;
    }

    &[data-direction="column"] {
        justify-content: flex-start;
        gap: ${Spacers.L};
        flex-direction: column;

        &:before {
            width: 2px;
            height: calc(100% - 24px);
        }

        & ${Item} {
            flex-direction: row;
            justify-content: flex-start;
        }
    }

    &[data-direction="row"] {
        justify-content: space-between;
        gap: ${Spacers.XS};
        flex-direction: row;

        &:before {
            width: calc(100% - 24px);
            height: 2px;
        }

        & ${Item} {
            flex-direction: column;
            justify-content: center;
        }
    }
`

const NUMBER_SIZE = 24

const Number = styled.span`
    width: ${NUMBER_SIZE}px;
    height: ${NUMBER_SIZE}px;
    border-radius: ${Radiuses.Circle};
    outline: 2px solid ${({ theme }) => theme.Background};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    font-weight: ${FontWeights.Black};
    background-color: ${({ theme }) =>
        theme.ColorsHoverHover({ $color: "primary" })};
    color: ${({ theme }) => theme.Background};

    &.active {
        background-color: ${({ theme }) =>
            theme.ColorsHoverDefault({ $color: "primary" })};
    }
`

setDefaultTheme([StyledStepper, Item, Number])

export { StyledStepper, Item, Number }
