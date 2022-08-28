/*=============================================== InputCounter styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

const StyledInputCounter = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })}
`

const Input = styled.input<{ $isEditable: boolean }>`
    width: fit-content;
    width: ${({ $isEditable }) => ($isEditable ? 48 : 32)}px;
    height: 32px;
    line-height: 32px;
    padding: 0;
    border: none;
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Titles.H6};
    text-align: center;
    font-weight: ${Variables.FontWeights.Black};

    ${({ $isEditable }) =>
        $isEditable &&
        css`
            border: 1px solid ${Variables.Colors.Gray200};
            -moz-appearance: textfield;
            border-radius: ${Variables.Radiuses.S};
            outline: none;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            &:focus {
                border-color: ${Variables.Colors.Primary500};
            }
        `}
`

export { StyledInputCounter, Input }
