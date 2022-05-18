// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

const Input = styled.input`
    border: 1px solid ${Variables.Colors.Gray200};
    font-size: ${Variables.FontSizes.Body};
    width: 32px;
    border-radius: ${Variables.Radiuses.XS};
    padding: ${Variables.Spacers.XXS};
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const Button = styled.button`
    padding: 0;
    --size: 24px;
    width: var(--size);
    height: var(--size);
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    border: none;
    border-radius: 50%;
    background-color: transparent;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};

    &:hover {
        color: ${Variables.Colors.Primary300};
        background-color: ${Variables.Colors.Gray50};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};

        &:hover {
            color: ${Variables.Colors.Gray500};
            background-color: transparent;
        }
    }
`

export { Input, Button }
